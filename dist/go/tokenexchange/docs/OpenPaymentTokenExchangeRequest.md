# OpenPaymentTokenExchangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpiryDate** | **string** | Expiration Date, YYMM format | 
**Pan** | **string** | Primary Account Number (PAN) | 

## Methods

### NewOpenPaymentTokenExchangeRequest

`func NewOpenPaymentTokenExchangeRequest(expiryDate string, pan string, ) *OpenPaymentTokenExchangeRequest`

NewOpenPaymentTokenExchangeRequest instantiates a new OpenPaymentTokenExchangeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpenPaymentTokenExchangeRequestWithDefaults

`func NewOpenPaymentTokenExchangeRequestWithDefaults() *OpenPaymentTokenExchangeRequest`

NewOpenPaymentTokenExchangeRequestWithDefaults instantiates a new OpenPaymentTokenExchangeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpiryDate

`func (o *OpenPaymentTokenExchangeRequest) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *OpenPaymentTokenExchangeRequest) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *OpenPaymentTokenExchangeRequest) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.


### GetPan

`func (o *OpenPaymentTokenExchangeRequest) GetPan() string`

GetPan returns the Pan field if non-nil, zero value otherwise.

### GetPanOk

`func (o *OpenPaymentTokenExchangeRequest) GetPanOk() (*string, bool)`

GetPanOk returns a tuple with the Pan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPan

`func (o *OpenPaymentTokenExchangeRequest) SetPan(v string)`

SetPan sets Pan field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


