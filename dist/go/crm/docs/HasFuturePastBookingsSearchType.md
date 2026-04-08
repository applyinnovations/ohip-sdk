# HasFuturePastBookingsSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**SearchFor** | Pointer to **string** | Search for active or past. | [optional] 
**SearchIn** | Pointer to **string** | Search in business blocks or reservations. | [optional] 
**RateCode** | Pointer to **string** | Unique identifier of the rate code of business block or reservation. | [optional] 
**Exclusions** | Pointer to [**HasFuturePastBookingsExclusionsType**](HasFuturePastBookingsExclusionsType.md) |  | [optional] 

## Methods

### NewHasFuturePastBookingsSearchType

`func NewHasFuturePastBookingsSearchType() *HasFuturePastBookingsSearchType`

NewHasFuturePastBookingsSearchType instantiates a new HasFuturePastBookingsSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHasFuturePastBookingsSearchTypeWithDefaults

`func NewHasFuturePastBookingsSearchTypeWithDefaults() *HasFuturePastBookingsSearchType`

NewHasFuturePastBookingsSearchTypeWithDefaults instantiates a new HasFuturePastBookingsSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *HasFuturePastBookingsSearchType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *HasFuturePastBookingsSearchType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *HasFuturePastBookingsSearchType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *HasFuturePastBookingsSearchType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetSearchFor

`func (o *HasFuturePastBookingsSearchType) GetSearchFor() string`

GetSearchFor returns the SearchFor field if non-nil, zero value otherwise.

### GetSearchForOk

`func (o *HasFuturePastBookingsSearchType) GetSearchForOk() (*string, bool)`

GetSearchForOk returns a tuple with the SearchFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchFor

`func (o *HasFuturePastBookingsSearchType) SetSearchFor(v string)`

SetSearchFor sets SearchFor field to given value.

### HasSearchFor

`func (o *HasFuturePastBookingsSearchType) HasSearchFor() bool`

HasSearchFor returns a boolean if a field has been set.

### GetSearchIn

`func (o *HasFuturePastBookingsSearchType) GetSearchIn() string`

GetSearchIn returns the SearchIn field if non-nil, zero value otherwise.

### GetSearchInOk

`func (o *HasFuturePastBookingsSearchType) GetSearchInOk() (*string, bool)`

GetSearchInOk returns a tuple with the SearchIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchIn

`func (o *HasFuturePastBookingsSearchType) SetSearchIn(v string)`

SetSearchIn sets SearchIn field to given value.

### HasSearchIn

`func (o *HasFuturePastBookingsSearchType) HasSearchIn() bool`

HasSearchIn returns a boolean if a field has been set.

### GetRateCode

`func (o *HasFuturePastBookingsSearchType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *HasFuturePastBookingsSearchType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *HasFuturePastBookingsSearchType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *HasFuturePastBookingsSearchType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetExclusions

`func (o *HasFuturePastBookingsSearchType) GetExclusions() HasFuturePastBookingsExclusionsType`

GetExclusions returns the Exclusions field if non-nil, zero value otherwise.

### GetExclusionsOk

`func (o *HasFuturePastBookingsSearchType) GetExclusionsOk() (*HasFuturePastBookingsExclusionsType, bool)`

GetExclusionsOk returns a tuple with the Exclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExclusions

`func (o *HasFuturePastBookingsSearchType) SetExclusions(v HasFuturePastBookingsExclusionsType)`

SetExclusions sets Exclusions field to given value.

### HasExclusions

`func (o *HasFuturePastBookingsSearchType) HasExclusions() bool`

HasExclusions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


