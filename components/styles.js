import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    boxtitulo: {
        backgroundColor: '#000',
        width: '90%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    box: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 10,
    },
    imagem: {
        width: 200,
        height: 200,
        marginTop: 30,
        margin: 10,
    },
    botao: {
        width: '60%',
        height: '10%',
        justifyContent: 'center',
        backgroundColor: '#000',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        borderWidth: 1.5,
    },
    botaotitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    botaoimagem: {
        width: 24,
        height: 24,
    },
    titulo: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderTopWidth: 3,
        margin: 10,
        marginBottom: 5,
    },
    subtitulo: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 3,
    },
    album: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
        fontStyle: 'italic',
    },
    paragrafo: {
        margin: 10,
        fontSize: 16,
    },
});

export default styles;