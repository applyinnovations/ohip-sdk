# ProfileEnrollmentTypeProfileDeliveryMethods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileDeliveryMethod** | Pointer to [**[]ProfileDeliveryMethod**](ProfileDeliveryMethod.md) | Collection of delivery methods for this Profile. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewProfileEnrollmentTypeProfileDeliveryMethods

`func NewProfileEnrollmentTypeProfileDeliveryMethods() *ProfileEnrollmentTypeProfileDeliveryMethods`

NewProfileEnrollmentTypeProfileDeliveryMethods instantiates a new ProfileEnrollmentTypeProfileDeliveryMethods object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeProfileDeliveryMethodsWithDefaults

`func NewProfileEnrollmentTypeProfileDeliveryMethodsWithDefaults() *ProfileEnrollmentTypeProfileDeliveryMethods`

NewProfileEnrollmentTypeProfileDeliveryMethodsWithDefaults instantiates a new ProfileEnrollmentTypeProfileDeliveryMethods object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileDeliveryMethod

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetProfileDeliveryMethod() []ProfileDeliveryMethod`

GetProfileDeliveryMethod returns the ProfileDeliveryMethod field if non-nil, zero value otherwise.

### GetProfileDeliveryMethodOk

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetProfileDeliveryMethodOk() (*[]ProfileDeliveryMethod, bool)`

GetProfileDeliveryMethodOk returns a tuple with the ProfileDeliveryMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDeliveryMethod

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) SetProfileDeliveryMethod(v []ProfileDeliveryMethod)`

SetProfileDeliveryMethod sets ProfileDeliveryMethod field to given value.

### HasProfileDeliveryMethod

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) HasProfileDeliveryMethod() bool`

HasProfileDeliveryMethod returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileEnrollmentTypeProfileDeliveryMethods) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


