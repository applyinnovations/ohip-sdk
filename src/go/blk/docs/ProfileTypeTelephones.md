# ProfileTypeTelephones

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TelephoneInfo** | Pointer to [**[]TelephoneInfoType**](TelephoneInfoType.md) | Collection of Detailed information on telephone/fax for the customer. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

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

### GetCount

`func (o *ProfileTypeTelephones) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypeTelephones) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypeTelephones) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypeTelephones) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTypeTelephones) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypeTelephones) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypeTelephones) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypeTelephones) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

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

### GetTotalResults

`func (o *ProfileTypeTelephones) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypeTelephones) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypeTelephones) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypeTelephones) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


