/* =========================================
   أذكار المسلم
   المحرك الرئيسي للموقع
   ========================================= */

"use strict";

/* =========================================
   قاعدة بيانات الأذكار
   ========================================= */

const azkarData = {

    morning: {
        title: "أذكار الصباح",

        items: [

            {
                text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nاللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                count: 1,
                reference: "سورة البقرة: 255"
            },

            {
                text: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
                count: 3,
                reference: "سورة الإخلاص"
            },

            {
                text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
                count: 3,
                reference: "سورة الفلق"
            },

            {
                text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
                count: 3,
                reference: "سورة الناس"
            },

            {
                text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ. رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
                count: 1,
                reference: "صحيح مسلم"
            },

            {
                text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",
                count: 1,
                reference: "سنن أبي داود والترمذي"
            },

            {
                text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
                count: 1,
                reference: "سيد الاستغفار - صحيح البخاري"
            },

            {
                text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",
                count: 3,
                reference: "سنن أبي داود والترمذي"
            },

            {
                text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.",
                count: 4,
                reference: "سنن أبي داود"
            },

            {
                text: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
                count: 1,
                reference: "سنن أبي داود"
            },

            {
                text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
                count: 7,
                reference: "سنن أبي داود"
            },

            {
                text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
                count: 100,
                reference: "صحيح مسلم"
            },

            {
                text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
                count: 100,
                reference: "صحيح البخاري وصحيح مسلم"
            }

        ]
    },


    evening: {
        title: "أذكار المساء",

        items: [

            {
                text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nاللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                count: 1,
                reference: "سورة البقرة: 255"
            },

            {
                text: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
                count: 3,
                reference: "سورة الإخلاص"
            },

            {
                text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
                count: 3,
                reference: "سورة الفلق"
            },

            {
                text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
                count: 3,
                reference: "سورة الناس"
            },

            {
                text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ. رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
                count: 1,
                reference: "صحيح مسلم"
            },

            {
                text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",
                count: 1,
                reference: "سنن أبي داود والترمذي"
            },

            {
                text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
                count: 1,
                reference: "سيد الاستغفار - صحيح البخاري"
            },

            {
                text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",
                count: 3,
                reference: "سنن أبي داود والترمذي"
            },

            {
                text: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.",
                count: 4,
                reference: "سنن أبي داود"
            },

            {
                text: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
                count: 1,
                reference: "سنن أبي داود"
            },

            {
                text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
                count: 7,
                reference: "سنن أبي داود"
            },

            {
                text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
                count: 100,
                reference: "صحيح مسلم"
            }

        ]
    },


    protection: {
        title: "التحصين",

        items: [

            {
                text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
                count: 3,
                reference: "صحيح مسلم"
            },

            {
                text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
                count: 3,
                reference: "سنن أبي داود والترمذي"
            },

            {
                text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.",
                count: 1,
                reference: "سنن أبي داود وابن ماجه"
            },

            {
                text: "اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي.",
                count: 1,
                reference: "سنن أبي داود وابن ماجه"
            },

            {
                text: "يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
                count: 1,
                reference: "سنن النسائي في عمل اليوم والليلة"
            },

            {
                text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
                count: 1,
                reference: "صحيح البخاري"
            }

        ]
    },


    ruqyah: {
        title: "الرقية الشرعية",

        items: [

            {
                text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                count: 1,
                reference: "سورة الفاتحة"
            },

            {
                text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
                count: 1,
                reference: "آية الكرسي - سورة البقرة: 255"
            },

            {
                text: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
                count: 3,
                reference: "سورة الإخلاص"
            },

            {
                text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
                count: 3,
                reference: "سورة الفلق"
            },

            {
                text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
                count: 3,
                reference: "سورة الناس"
            },

            {
                text: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ.",
                count: 1,
                reference: "صحيح مسلم"
            }

        ]
    },


    home: {
        title: "أذكار المنزل",

        items: [

            {
                text: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.",
                count: 1,
                reference: "سنن أبي داود والترمذي - عند الخروج من المنزل"
            },

            {
                text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا.",
                count: 1,
                reference: "سنن أبي داود - عند دخول المنزل"
            },

            {
                text: "بِسْمِ اللَّهِ.",
                count: 1,
                reference: "صحيح مسلم - عند دخول المنزل والطعام"
            }

        ]
    }

};


/* =========================================
   المتغيرات الأساسية
   ========================================= */

let currentCategory = "morning";

let currentIndex = 0;

let currentCount = 0;

let searchMode = false;

let searchResults = [];

let favorites = JSON.parse(
    localStorage.getItem("azkarFavorites") || "[]"
);

let progress = JSON.parse(
    localStorage.getItem("azkarProgress") || "{}"
);


/* =========================================
   عناصر الصفحة
   ========================================= */

const elements = {

    container: document.getElementById("azkarContainer"),

    title: document.getElementById("categoryTitle"),

    total: document.getElementById("totalAzkar"),

    progressBar: document.getElementById("progressBar"),

    progressText: document.getElementById("progressText"),

    favoritesCount: document.getElementById("favoritesCount"),

    currentDate: document.getElementById("currentDate"),

    searchInput: document.getElementById("searchInput"),

    clearSearch: document.getElementById("clearSearch"),

    emptyState: document.getElementById("emptyState"),

    toast: document.getElementById("toast"),

    themeToggle: document.getElementById("themeToggle"),

    fontIncrease: document.getElementById("fontIncrease"),

    fontDecrease: document.getElementById("fontDecrease"),

    previousBtn: document.getElementById("previousBtn"),

    nextBtn: document.getElementById("nextBtn"),

    resetBtn: document.getElementById("resetBtn")

};


/* =========================================
   أدوات مساعدة
   ========================================= */

function saveData() {

    localStorage.setItem(
        "azkarFavorites",
        JSON.stringify(favorites)
    );

    localStorage.setItem(
        "azkarProgress",
        JSON.stringify(progress)
    );

}


function showToast(message) {

    elements.toast.textContent = message;

    elements.toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {

        elements.toast.classList.remove("show");

    }, 2200);

}


function vibrate() {

    if ("vibrate" in navigator) {

        navigator.vibrate(25);

    }

}


function getCurrentItems() {

    if (currentCategory === "favorites") {

        return favorites.map(item => ({
            ...item,
            favorite: true
        }));

    }

    if (searchMode) {

        return searchResults;

    }

    return azkarData[currentCategory]?.items || [];

}


function getProgressKey(category, index) {

    return `${category}_${index}`;

}


function getSavedCount(category, index) {

    const key = getProgressKey(category, index);

    return progress[key] || 0;

}


/* =========================================
   التاريخ
   ========================================= */

function updateDate() {

    const today = new Date();

    const dateText = today.toLocaleDateString("ar-EG", {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    });

    elements.currentDate.textContent = dateText;

}


/* =========================================
   عرض الأقسام
   ========================================= */

function selectCategory(category) {

    if (!azkarData[category] && category !== "favorites") {

        return;

    }

    currentCategory = category;

    currentIndex = 0;

    currentCount = 0;

    searchMode = false;

    elements.searchInput.value = "";

    elements.clearSearch.style.display = "none";

    document.querySelectorAll(".category-card").forEach(card => {

        card.classList.toggle(

            "active",

            card.dataset.category === category

        );

    });

    elements.title.textContent =

        category === "favorites"

            ? "الأذكار المفضلة"

            : azkarData[category].title;

    renderAzkar();

}


/* =========================================
   حساب تقدم الورد
   ========================================= */

function calculateProgress() {

    const items = getCurrentItems();

    if (!items.length) {

        elements.progressBar.style.width = "0%";

        elements.progressText.textContent = "0%";

        return;

    }

    let totalRequired = 0;

    let totalCompleted = 0;

    items.forEach((item, index) => {

        totalRequired += item.count;

        const saved = currentCategory === "favorites"

            ? 0

            : getSavedCount(currentCategory, index);

        totalCompleted += Math.min(saved, item.count);

    });

    const percentage = Math.round(

        (totalCompleted / totalRequired) * 100

    );

    elements.progressBar.style.width = percentage + "%";

    elements.progressText.textContent = percentage + "%";

}


/* =========================================
   عرض الذكر
   ========================================= */

function renderAzkar() {

    const items = getCurrentItems();

    elements.container.innerHTML = "";

    elements.total.textContent = `${items.length} أذكار`;

    elements.favoritesCount.textContent =

        `${favorites.length} ذكر`;

    if (!items.length) {

        elements.emptyState.classList.remove("hidden");

        calculateProgress();

        return;

    }

    elements.emptyState.classList.add("hidden");

    if (currentIndex >= items.length) {

        currentIndex = items.length - 1;

    }

    if (currentIndex < 0) {

        currentIndex = 0;

    }

    const item = items[currentIndex];

    const savedCount =

        currentCategory === "favorites"

            ? 0

            : getSavedCount(currentCategory, currentIndex);

    currentCount = savedCount;

    const isFavorite = favorites.some(favorite =>

        favorite.text === item.text

    );

    const completed = currentCount >= item.count;

    const card = document.createElement("article");

    card.className = "azkar-card";

    if (completed) {

        card.classList.add("completed");

    }

    const text = document.createElement("p");

    text.className = "azkar-text";

    text.textContent = item.text;

    const reference = document.createElement("div");

    reference.className = "azkar-reference";

    reference.textContent = item.reference || "";

    const actions = document.createElement("div");

    actions.className = "azkar-actions";

    const favoriteButton = document.createElement("button");

    favoriteButton.className =

        "favorite-button" + (isFavorite ? " active" : "");

    favoriteButton.textContent =

        isFavorite ? "♥ في المفضلة" : "♡ أضف للمفضلة";

    favoriteButton.addEventListener("click", () => {

        toggleFavorite(item);

    });

    const copyButton = document.createElement("button");

    copyButton.className = "copy-button";

    copyButton.textContent = "نسخ الذكر";

    copyButton.addEventListener("click", () => {

        copyText(item.text);

    });

    actions.append(favoriteButton, copyButton);

    const counterArea = document.createElement("div");

    counterArea.className = "counter-area";

    const circle = document.createElement("div");

    circle.className = "counter-circle";

    circle.innerHTML = `

        <strong>${currentCount}</strong>

        <small>من ${item.count}</small>

    `;

    const counterButton = document.createElement("button");

    counterButton.className = "counter-button";

    counterButton.textContent =

        completed ? "اكتمل الذكر ✓" : "سبّح هنا";

    counterButton.disabled = completed;

    counterButton.addEventListener("click", incrementCounter);

    counterArea.append(circle, counterButton);

    card.append(

        text,

        reference,

        actions,

        counterArea

    );

    elements.container.appendChild(card);

    calculateProgress();

}


/* =========================================
   زيادة العداد
   ========================================= */

function incrementCounter() {

    const items = getCurrentItems();

    const item = items[currentIndex];

    if (!item || currentCount >= item.count) {

        return;

    }

    currentCount++;

    vibrate();

    if (currentCategory !== "favorites") {

        const key = getProgressKey(

            currentCategory,

            currentIndex

        );

        progress[key] = currentCount;

        saveData();

    }

    const circle = document.querySelector(".counter-circle");

    const card = document.querySelector(".azkar-card");

    const button = document.querySelector(".counter-button");

    if (circle) {

        circle.innerHTML = `

            <strong>${currentCount}</strong>

            <small>من ${item.count}</small>

        `;

        circle.classList.remove("counter-pulse");

        void circle.offsetWidth;

        circle.classList.add("counter-pulse");

    }

    if (currentCount >= item.count) {

        if (card) {

            card.classList.add("completed");

        }

        if (button) {

            button.textContent = "اكتمل الذكر ✓";

            button.disabled = true;

        }

        showToast("تقبّل الله منك ❤️");

        calculateProgress();

        setTimeout(() => {

            goToNext();

        }, 850);

    } else {

        calculateProgress();

    }

}


/* =========================================
   الانتقال بين الأذكار
   ========================================= */

function goToNext() {

    const items = getCurrentItems();

    if (!items.length) {

        return;

    }

    if (currentIndex < items.length - 1) {

        currentIndex++;

        renderAzkar();

        return;

    }

    showToast("أحسنت! أتممت جميع أذكار هذا القسم.");

    renderAzkar();

}


function goToPrevious() {

    if (currentIndex > 0) {

        currentIndex--;

        renderAzkar();

    } else {

        showToast("أنت في أول ذكر.");

    }

}


/* =========================================
   إعادة الورد
   ========================================= */

function resetProgress() {

    if (currentCategory === "favorites") {

        showToast("لا يمكن إعادة عداد المفضلة.");

        return;

    }

    const confirmed = confirm(

        "هل تريد إعادة عدادات هذا القسم من البداية؟"

    );

    if (!confirmed) {

        return;

    }

    const items = azkarData[currentCategory].items;

    items.forEach((item, index) => {

        delete progress[

            getProgressKey(currentCategory, index)

        ];

    });

    saveData();

    currentIndex = 0;

    currentCount = 0;

    renderAzkar();

    showToast("تمت إعادة الورد.");

}


/* =========================================
   المفضلة
   ========================================= */

function toggleFavorite(item) {

    const index = favorites.findIndex(favorite =>

        favorite.text === item.text

    );

    if (index !== -1) {

        favorites.splice(index, 1);

        showToast("تم حذف الذكر من المفضلة.");

    } else {

        favorites.push({

            text: item.text,

            count: item.count,

            reference: item.reference

        });

        showToast("تمت إضافة الذكر للمفضلة ♥");

    }

    saveData();

    renderAzkar();

}


/* =========================================
   نسخ الذكر
   ========================================= */

async function copyText(text) {

    try {

        await navigator.clipboard.writeText(text);

        showToast("تم نسخ الذكر بنجاح.");

    } catch (error) {

        const textarea = document.createElement("textarea");

        textarea.value = text;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

        showToast("تم نسخ الذكر.");

    }

}


/* =========================================
   البحث
   ========================================= */

function normalizeArabic(text) {

    return text

        .replace(/[أإآٱ]/g, "ا")

        .replace(/ى/g, "ي")

        .replace(/ة/g, "ه")

        .replace(/[\u064B-\u065F\u0670]/g, "")

        .replace(/\s+/g, " ")

        .trim()

        .toLowerCase();

}


function searchAzkar() {

    const query = normalizeArabic(

        elements.searchInput.value

    );

    elements.clearSearch.style.display =

        query ? "block" : "none";

    if (!query) {

        if (searchMode) {

            searchMode = false;

            selectCategory(currentCategory);

        }

        return;

    }

    searchMode = true;

    searchResults = [];

    Object.keys(azkarData).forEach(category => {

        azkarData[category].items.forEach(item => {

            if (

                normalizeArabic(item.text).includes(query)

            ) {

                searchResults.push(item);

            }

        });

    });

    currentIndex = 0;

    currentCount = 0;

    elements.title.textContent = "نتائج البحث";

    renderAzkar();

}


/* =========================================
   الوضع الليلي والنهاري
   ========================================= */

function applyTheme(theme) {

    document.body.classList.toggle(

        "dark-mode",

        theme === "dark"

    );

    elements.themeToggle.textContent =

        theme === "dark" ? "☀" : "☾";

    localStorage.setItem("azkarTheme", theme);

}


function toggleTheme() {

    const dark = document.body.classList.contains(

        "dark-mode"

    );

    applyTheme(dark ? "light" : "dark");

}


/* =========================================
   تكبير وتصغير الخط
   ========================================= */

let fontSize = Number(

    localStorage.getItem("azkarFontSize") || 1

);

function applyFontSize() {

    fontSize = Math.min(

        1.5,

        Math.max(0.8, fontSize)

    );

    document.documentElement.style.setProperty(

        "--font-size",

        fontSize

    );

    localStorage.setItem(

        "azkarFontSize",

        fontSize

    );

}


/* =========================================
   أحداث الأزرار
   ========================================= */

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        selectCategory(card.dataset.category);

        document.getElementById("azkarSection")

            .scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

    });

});


elements.nextBtn.addEventListener("click", goToNext);


elements.previousBtn.addEventListener(

    "click",

    goToPrevious

);


elements.resetBtn.addEventListener(

    "click",

    resetProgress

);


elements.searchInput.addEventListener(

    "input",

    searchAzkar

);


elements.clearSearch.addEventListener("click", () => {

    elements.searchInput.value = "";

    elements.clearSearch.style.display = "none";

    searchMode = false;

    selectCategory(currentCategory);

});


elements.themeToggle.addEventListener(

    "click",

    toggleTheme

);


elements.fontIncrease.addEventListener("click", () => {

    fontSize += 0.1;

    applyFontSize();

});


elements.fontDecrease.addEventListener("click", () => {

    fontSize -= 0.1;

    applyFontSize();

});


/* =========================================
   تشغيل الموقع
   ========================================= */

function initializeApp() {

    updateDate();

    applyFontSize();

    const savedTheme =

        localStorage.getItem("azkarTheme") || "light";

    applyTheme(savedTheme);

    selectCategory("morning");

}


initializeApp();
