# OpenPaymentTokenExchange200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardType** | **string** | OPERA Card Type | 
**ExpiryDate** | **string** | Expiration Date, YYMM format | 
**Pan** | **string** | Masked Primary Account Number (PAN) | 
**Token** | **string** | Card Token | 

## Methods

### NewOpenPaymentTokenExchange200Response

`func NewOpenPaymentTokenExchange200Response(cardType string, expiryDate string, pan string, token string, ) *OpenPaymentTokenExchange200Response`

NewOpenPaymentTokenExchange200Response instantiates a new OpenPaymentTokenExchange200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpenPaymentTokenExchange200ResponseWithDefaults

`func NewOpenPaymentTokenExchange200ResponseWithDefaults() *OpenPaymentTokenExchange200Response`

NewOpenPaymentTokenExchange200ResponseWithDefaults instantiates a new OpenPaymentTokenExchange200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardType

`func (o *OpenPaymentTokenExchange200Response) GetCardType() string`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *OpenPaymentTokenExchange200Response) GetCardTypeOk() (*string, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *OpenPaymentTokenExchange200Response) SetCardType(v string)`

SetCardType sets CardType field to given value.


### GetExpiryDate

`func (o *OpenPaymentTokenExchange200Response) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *OpenPaymentTokenExchange200Response) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *OpenPaymentTokenExchange200Response) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.


### GetPan

`func (o *OpenPaymentTokenExchange200Response) GetPan() string`

GetPan returns the Pan field if non-nil, zero value otherwise.

### GetPanOk

`func (o *OpenPaymentTokenExchange200Response) GetPanOk() (*string, bool)`

GetPanOk returns a tuple with the Pan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPan

`func (o *OpenPaymentTokenExchange200Response) SetPan(v string)`

SetPan sets Pan field to given value.


### GetToken

`func (o *OpenPaymentTokenExchange200Response) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *OpenPaymentTokenExchange200Response) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *OpenPaymentTokenExchange200Response) SetToken(v string)`

SetToken sets Token field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


