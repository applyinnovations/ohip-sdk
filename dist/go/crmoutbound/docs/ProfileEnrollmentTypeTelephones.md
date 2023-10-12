# ProfileEnrollmentTypeTelephones

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TelephoneInfo** | Pointer to [**[]TelephoneInfoType**](TelephoneInfoType.md) | Collection of Detailed information on telephone/fax for the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileEnrollmentTypeTelephones

`func NewProfileEnrollmentTypeTelephones() *ProfileEnrollmentTypeTelephones`

NewProfileEnrollmentTypeTelephones instantiates a new ProfileEnrollmentTypeTelephones object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeTelephonesWithDefaults

`func NewProfileEnrollmentTypeTelephonesWithDefaults() *ProfileEnrollmentTypeTelephones`

NewProfileEnrollmentTypeTelephonesWithDefaults instantiates a new ProfileEnrollmentTypeTelephones object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephoneInfo

`func (o *ProfileEnrollmentTypeTelephones) GetTelephoneInfo() []TelephoneInfoType`

GetTelephoneInfo returns the TelephoneInfo field if non-nil, zero value otherwise.

### GetTelephoneInfoOk

`func (o *ProfileEnrollmentTypeTelephones) GetTelephoneInfoOk() (*[]TelephoneInfoType, bool)`

GetTelephoneInfoOk returns a tuple with the TelephoneInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneInfo

`func (o *ProfileEnrollmentTypeTelephones) SetTelephoneInfo(v []TelephoneInfoType)`

SetTelephoneInfo sets TelephoneInfo field to given value.

### HasTelephoneInfo

`func (o *ProfileEnrollmentTypeTelephones) HasTelephoneInfo() bool`

HasTelephoneInfo returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *ProfileEnrollmentTypeTelephones) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ProfileEnrollmentTypeTelephones) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ProfileEnrollmentTypeTelephones) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ProfileEnrollmentTypeTelephones) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileEnrollmentTypeTelephones) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileEnrollmentTypeTelephones) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileEnrollmentTypeTelephones) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileEnrollmentTypeTelephones) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


