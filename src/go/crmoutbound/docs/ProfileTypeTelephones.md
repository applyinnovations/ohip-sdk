# ProfileTypeTelephones

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TelephoneInfo** | Pointer to [**[]TelephoneInfoType**](TelephoneInfoType.md) | Collection of Detailed information on telephone/fax for the customer. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypeTelephones

`func NewProfileTypeTelephones() *ProfileTypeTelephones`

NewProfileTypeTelephones instantiates a new ProfileTypeTelephones object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeTelephonesWithDefaults

`func NewProfileTypeTelephonesWithDefaults() *ProfileTypeTelephones`

NewProfileTypeTelephonesWithDefaults instantiates a new ProfileTypeTelephones object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephoneInfo

`func (o *ProfileTypeTelephones) GetTelephoneInfo() []TelephoneInfoType`

GetTelephoneInfo returns the TelephoneInfo field if non-nil, zero value otherwise.

### GetTelephoneInfoOk

`func (o *ProfileTypeTelephones) GetTelephoneInfoOk() (*[]TelephoneInfoType, bool)`

GetTelephoneInfoOk returns a tuple with the TelephoneInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneInfo

`func (o *ProfileTypeTelephones) SetTelephoneInfo(v []TelephoneInfoType)`

SetTelephoneInfo sets TelephoneInfo field to given value.

### HasTelephoneInfo

`func (o *ProfileTypeTelephones) HasTelephoneInfo() bool`

HasTelephoneInfo returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileTypeTelephones) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileTypeTelephones) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileTypeTelephones) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileTypeTelephones) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


