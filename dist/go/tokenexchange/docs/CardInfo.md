# CardInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpiryDate** | **string** | Expiration Date, YYMM format | 
**Pan** | **string** | Primary Account Number (PAN) | 
**RecordNumber** | **int32** | Record number, the value must be unique within the collection | 

## Methods

### NewCardInfo

`func NewCardInfo(expiryDate string, pan string, recordNumber int32, ) *CardInfo`

NewCardInfo instantiates a new CardInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardInfoWithDefaults

`func NewCardInfoWithDefaults() *CardInfo`

NewCardInfoWithDefaults instantiates a new CardInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpiryDate

`func (o *CardInfo) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *CardInfo) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *CardInfo) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.


### GetPan

`func (o *CardInfo) GetPan() string`

GetPan returns the Pan field if non-nil, zero value otherwise.

### GetPanOk

`func (o *CardInfo) GetPanOk() (*string, bool)`

GetPanOk returns a tuple with the Pan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPan

`func (o *CardInfo) SetPan(v string)`

SetPan sets Pan field to given value.


### GetRecordNumber

`func (o *CardInfo) GetRecordNumber() int32`

GetRecordNumber returns the RecordNumber field if non-nil, zero value otherwise.

### GetRecordNumberOk

`func (o *CardInfo) GetRecordNumberOk() (*int32, bool)`

GetRecordNumberOk returns a tuple with the RecordNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordNumber

`func (o *CardInfo) SetRecordNumber(v int32)`

SetRecordNumber sets RecordNumber field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


