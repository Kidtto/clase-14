using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Generador : MonoBehaviour
{
    [Range(20, 20000)]
    public float frecuencia;

    public float FrecuenciaMuestreo = 44100;

    public float TiempoSegundos = 2.0f;

    AudioSource audioSource;

    int timeIndex = 0;
    int Funcion = 0;


    // Start is called before the first frame update
    void Start()
    {
        audioSource = gameObject.AddComponent<AudioSource>();
        audioSource.playOnAwake = false;
        audioSource.spatialBlend = 0; //Estereo
        audioSource.Stop(); //Pausar el audio
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (!audioSource.isPlaying)
            {
                timeIndex = 0;
                audioSource.Play();
                Funcion = 0;
            }
            else
            {
                audioSource.Stop();
            }
        }

        if (Input.GetKeyDown(KeyCode.L))
        {
            if (!audioSource.isPlaying)
            {
                timeIndex = 0;
                audioSource.Play();
                Funcion = 1;
            }
            else
            {
                audioSource.Stop();
            }
        }

        if (Input.GetKeyDown(KeyCode.K))
        {
            if (!audioSource.isPlaying)
            {
                timeIndex = 0;
                audioSource.Play();
                Funcion = 2;
            }
            else
            {
                audioSource.Stop();
            }

        }
    }

    void OnAudioFilterRead(float[] data, int channels)
    {
        if (Funcion == 0)
        {
            for (int i = 0; i < data.Length; i += channels)
            {
                data[i] = CreateSeno(timeIndex, frecuencia, FrecuenciaMuestreo);

                if (channels == 2)
                    data[i + 1] = CreateSeno(timeIndex, frecuencia, FrecuenciaMuestreo);

                timeIndex++;

                if (timeIndex >= (FrecuenciaMuestreo * TiempoSegundos))
                    timeIndex = 0;
            }
        }

        else if (Funcion == 1)
        {
            for (int i = 0; i < data.Length; i += channels)
            {
                data[i] = CreateSquare(timeIndex, frecuencia, FrecuenciaMuestreo);

                if (channels == 2)
                    data[i + 1] = CreateSquare(timeIndex, frecuencia, FrecuenciaMuestreo);

                timeIndex++;

                if (timeIndex >= (FrecuenciaMuestreo * TiempoSegundos))
                    timeIndex = 0;
            }
        }

        else if (Funcion == 2) //Generar se;al triangular
        {
            int Ciclos = (int) (FrecuenciaMuestreo * TiempoSegundos / frecuencia);
            int Tm = (int) (FrecuenciaMuestreo / frecuencia);

            for (int i = 0; i < data.Length; i += channels)
            {
                data[i] = CreateTriangle(timeIndex, frecuencia, FrecuenciaMuestreo, Tm);

                if (channels == 2)
                    data[i + 1] = CreateTriangle(timeIndex, frecuencia, FrecuenciaMuestreo, Tm);

                timeIndex++;

                if (timeIndex >= Tm)
                    timeIndex = 0;
            }
        }

    }

    public float CreateSeno (int timeIndex, float frecuencia, float FrecuenciaMuestro)
    {
        return Mathf.Sin(2 * Mathf.PI * timeIndex * frecuencia / FrecuenciaMuestreo);
    }

    public float CreateSquare(int timeIndex, float frecuencia, float FrecuenciaMuestro)
    {
        if (Mathf.Sin(2 * Mathf.PI * timeIndex * frecuencia / FrecuenciaMuestreo) > 0)
            return 1;

        else if (Mathf.Sin(2 * Mathf.PI * timeIndex * frecuencia / FrecuenciaMuestreo) < 0)
            return -1;

        else
            return 0;
    }

    public float CreateTriangle(int timeIndex, float frecuencia, float FrecuenciaMuestro, int Tm)
    {
        float m1 = 1 / (Tm / 4.0f);
        float m2 = -2 / ((Tm * (3 / 4.0f)) - ((Tm / 4.0f)));
        float m3 = 1 / (Tm - ((Tm * 3) / 4.0f));

        float b1 = 1 - (m1 * (Tm / 4));
        float b2 = 1 - (m2 * (Tm / 4));
        float b3 = 0 - (m3 * Tm);

        if (timeIndex <= (Tm / 4))
            return (m1 * timeIndex + b1);

        else if (timeIndex > (Tm / 4) && timeIndex <= ((Tm * 3) / 4))
            return (m2 * timeIndex + b2);

        else return (m3 * timeIndex + b3);

        print("m1: " + m1.ToString());
        print("m2: " + m2.ToString());
        print("m3: " + m3.ToString());

        return 0;
        
    }
}
