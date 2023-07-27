import React from "react";
import '../css/detail.css';

function Detail() {
    return (<div className={"container wrapItemDetail"}>
        <div className="d-flex row"
            // style={{marginTop: 10, marginBottom: 10}}
        >
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
        </div>
        <div className="d-flex row"
             // style={{marginTop: 10, marginBottom: 10}}
        >
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
            <div className="d-flex col-6 col-md-3 justify-content-center">
                <div className={"itemDetail"}>
                    <p className={"textItemDetail"}>CHF.57.001</p>
                    <img
                        className={"imgItemDetail"}
                        src={"https://lh3.googleusercontent.com/fife/AKsag4NixQSCybkHAPv93x_FV57_Js5NGRzwowkvXx3mHOGbgjS6rh5ictwqL1cOjxoBg1Y19nLvdCqewgPSFdJoxsIU4zLV1KCDzWv0QlJChfb4fywvBRceICeIqsaIrLjOmRd4hB9ji97_6VVOqBxaUFkR8VTo3TG4wISCWkp4TPcpvs2l08NsVO8FdZNfZKl0sCzNm3TYeqVZiMmWXE5AHBYIeUagr9uo2Sd1I9jpsROfXmh9xM4MvgQRzxoS-MQVbo_BV9O32X7y10oCLCl-OKUGR61H5RKLX2-QOertbw2T9s3QUBEZU1K9ZTkHRTNKTpEkfPh7bs_IwRMCM_qoGURz-zRW7WEeppynjFWfK3ByoaaMTbUGlKclgEFl6DAcs6szjB0CIlaB0nol8qzlvkiPs6iyEmonS6dC9pvUm0BpoLy2uPsgal80at5XIx6hG1SpuREMsownBSOpwUBR6b-kuVLfivh459QFar3zCi1oJCC08ovzY8Yw8i8xjBnmdHVRcKbvmKJqbZtkCUYHo7hX2PKgAw6SoNqONqoY4O0oY6tVeNVgkmiNnEuLSlrIzs55X5ZG42ZeTgP_l1Ya3bCA9dqI0S9oUmt0-iOPWVL9vIBzPk83e-lhPqhk8rxGwtfyPl05ji3rpH4_4Zb-c5pZg_AOQD51d1rdAQKysknuEYzwrzgkrLSB-ZxwPr_Vgnyw8TD6slB92GuYjCyMkF8ZNvqQatPK354P6i5pFQV46Wjz79RE41LWKkUwukaJ2E2bQZoVrRzavIKc0t2POtXDr2LX7YDODpUY0O5seM3bTo3LN-WYB08koK4tuAWcj2rXl16rPwaeq_iMttyfEYisEo1t7hokHCuMKFBkn11DmK92cmImG7jiq8N6vB1gpKLQ5-yejdNSAb3jLqgjpAGxDWo1HcJmHo3swH26mQ-KDUtEuU4fJCh0pbw4sk1sAiXKFE8Eam6c5H2M1o6oYbvGFmiYmO4arrDA6k8Nw9lJiQkNNfU_yLo2I-MwJczsKSy5pbA-sNyicLfOKDxONCxD1RNW9SurTezSdkjjgQwbjLtJNPLHVGnDzXXia6nbtPQkuax-iepDqyu6wNgW8MxyvIom-9H02f9w_myEcnQz5kQ94gp9bV64tU728HRWpaH1KlTZmwAhSWu2JGeS_l63LFgMgVVUvAx84Al-7R76ytwnB-rTbLTDCF1OG_jWAQPXDLqpx6PIIV_wFG2zBKPdEzXVu7sYUlvghuhaFwkPTxNhXwKTjcDBDuTdJuo1E8wt2TLUNDPMoDaoBIcrPhcenWMzG8ljX3GcBho8_Gd_rboWTv6Dj5B8dh1xSurqInXsasEWUCk0h_Pgp_J7knp8ORZ__geqhhVBSN6qEsGEsior10CtEjeYra7JywTl4LzfdFVmsv6kbG6Z94R275HzgcIyrPHXV6kMjkHcYUhwnBMYcDuWMd1Z3Urhyyb62S8rYdvGq4VfLuCwcCjJBDyBGGyhrekjexHCgdFL6lAGJFksGKM3zKX4wk82VyRBURGGXe8a-QnpSzi436SGViAwev3G-_uQfTRllhD_O_autzSLqjkpBPNGR53IyJe9hAaudewWBa6ar5Y5pIq3e9C1yTR2IQ7IKUgEEZIXm7Ehs-D6Rv7if_NroQggmbbITOknKbNFBlC64lY8A6brmQ=w160-h152-p-k-rw-nu-v1"}/>
                </div>
            </div>
        </div>
    </div>)
}

export default Detail;

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

{/*<Row>*/
}
{/*    <Col>1 of 1</Col>*/
}
{/*    <Col>1 of 1</Col>*/
}
{/*    <Col*/
}
{/*        sm={12}*/
}
{/*        className='d-lg-none d-md-none d-xl-none d-xxl-none'*/
}
{/*        style={{backgroundColor: 'red'}}>*/
}
{/*        <Row>*/
}
{/*            <span>12 of mobile</span>.*/
}
{/*        </Row>*/
}
{/*    </Col>*/
}
{/*</Row>*/
}
{/*<Row>*/
}
{/*    <Col>1 of 3</Col>*/
}
{/*    <Col xs={6}>2 of 3 (wider)</Col>*/
}
{/*    <Col>3 of 3</Col>*/
}
{/*</Row>*/
}
{/*<Row>*/
}
{/*    /!*<Col>1 of 3</Col>*!/*/
}
{/*    /!*<Col xs={5} xl={2}>2 of 3 (wider)</Col>*!/*/
}
{/*    /!*<Col>3 of 3</Col>*!/*/
}
{/*    <Col xs lg="2" className="bg-dark">*/
}
{/*        3 of 3*/
}
{/*    </Col>*/
}
{/*    <Col xs={1} lg="2" className="bg-info">*/
}
{/*        3 of 3*/
}
{/*    </Col>*/
}
{/*</Row>*/
}