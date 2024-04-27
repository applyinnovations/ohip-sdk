# ProfileTypeProfileDeliveryMethods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**ProfileDeliveryMethod** | Pointer to [**[]ProfileDeliveryMethod**](ProfileDeliveryMethod.md) | Collection of delivery methods for this Profile. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypeProfileDeliveryMethods

`func NewProfileTypeProfileDeliveryMethods() *ProfileTypeProfileDeliveryMethods`

NewProfileTypeProfileDeliveryMethods instantiates a new ProfileTypeProfileDeliveryMethods object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeProfileDeliveryMethodsWithDefaults

`func NewProfileTypeProfileDeliveryMethodsWithDefaults() *ProfileTypeProfileDeliveryMethods`

NewProfileTypeProfileDeliveryMethodsWithDefaults instantiates a new ProfileTypeProfileDeliveryMethods object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ProfileTypeProfileDeliveryMethods) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypeProfileDeliveryMethods) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypeProfileDeliveryMethods) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypeProfileDeliveryMethods) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTypeProfileDeliveryMethods) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypeProfileDeliveryMethods) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypeProfileDeliveryMethods) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypeProfileDeliveryMethods) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetProfileDeliveryMethod

`func (o *ProfileTypeProfileDeliveryMethods) GetProfileDeliveryMethod() []ProfileDeliveryMethod`

GetProfileDeliveryMethod returns the ProfileDeliveryMethod field if non-nil, zero value otherwise.

### GetProfileDeliveryMethodOk

`func (o *ProfileTypeProfileDeliveryMethods) GetProfileDeliveryMethodOk() (*[]ProfileDeliveryMethod, bool)`

GetProfileDeliveryMethodOk returns a tuple with the ProfileDeliveryMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDeliveryMethod

`func (o *ProfileTypeProfileDeliveryMethods) SetProfileDeliveryMethod(v []ProfileDeliveryMethod)`

SetProfileDeliveryMethod sets ProfileDeliveryMethod field to given value.

### HasProfileDeliveryMethod

`func (o *ProfileTypeProfileDeliveryMethods) HasProfileDeliveryMethod() bool`

HasProfileDeliveryMethod returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTypeProfileDeliveryMethods) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypeProfileDeliveryMethods) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypeProfileDeliveryMethods) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypeProfileDeliveryMethods) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


