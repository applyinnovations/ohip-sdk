# TokenInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardType** | **string** | OPERA Card Type | 
**ExpiryDate** | **string** | Expiration Date, YYMM format | 
**Pan** | **string** | Masked Primary Account Number (PAN) | 
**RecordNumber** | **int32** | Record number | 
**Token** | **string** | Card Token | 

## Methods

### NewTokenInfo

`func NewTokenInfo(cardType string, expiryDate string, pan string, recordNumber int32, token string, ) *TokenInfo`

NewTokenInfo instantiates a new TokenInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenInfoWithDefaults

`func NewTokenInfoWithDefaults() *TokenInfo`

NewTokenInfoWithDefaults instantiates a new TokenInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardType

`func (o *TokenInfo) GetCardType() string`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *TokenInfo) GetCardTypeOk() (*string, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *TokenInfo) SetCardType(v string)`

SetCardType sets CardType field to given value.


### GetExpiryDate

`func (o *TokenInfo) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *TokenInfo) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *TokenInfo) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.


### GetPan

`func (o *TokenInfo) GetPan() string`

GetPan returns the Pan field if non-nil, zero value otherwise.

### GetPanOk

`func (o *TokenInfo) GetPanOk() (*string, bool)`

GetPanOk returns a tuple with the Pan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPan

`func (o *TokenInfo) SetPan(v string)`

SetPan sets Pan field to given value.


### GetRecordNumber

`func (o *TokenInfo) GetRecordNumber() int32`

GetRecordNumber returns the RecordNumber field if non-nil, zero value otherwise.

### GetRecordNumberOk

`func (o *TokenInfo) GetRecordNumberOk() (*int32, bool)`

GetRecordNumberOk returns a tuple with the RecordNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordNumber

`func (o *TokenInfo) SetRecordNumber(v int32)`

SetRecordNumber sets RecordNumber field to given value.


### GetToken

`func (o *TokenInfo) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *TokenInfo) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *TokenInfo) SetToken(v string)`

SetToken sets Token field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


