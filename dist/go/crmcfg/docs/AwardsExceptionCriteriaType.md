# AwardsExceptionCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MultipleRooms** | Pointer to **int32** | Enter the number of multiple rooms that should be flagged as an exception for same stay dates. | [optional] 
**BBSingleProperty** | Pointer to **bool** | Back to Back stay at a Single Property | [optional] 
**BBSingleGroup** | Pointer to **bool** | Back to back stay at a Single Group | [optional] 
**BBCrossMembership** | Pointer to **bool** | Cross Membership Back to Back Stays | [optional] 
**ExternalProcessingException** | Pointer to **int32** | Number of days while awaiting an external accept/reject response file. | [optional] 

## Methods

### NewAwardsExceptionCriteriaType

`func NewAwardsExceptionCriteriaType() *AwardsExceptionCriteriaType`

NewAwardsExceptionCriteriaType instantiates a new AwardsExceptionCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardsExceptionCriteriaTypeWithDefaults

`func NewAwardsExceptionCriteriaTypeWithDefaults() *AwardsExceptionCriteriaType`

NewAwardsExceptionCriteriaTypeWithDefaults instantiates a new AwardsExceptionCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMultipleRooms

`func (o *AwardsExceptionCriteriaType) GetMultipleRooms() int32`

GetMultipleRooms returns the MultipleRooms field if non-nil, zero value otherwise.

### GetMultipleRoomsOk

`func (o *AwardsExceptionCriteriaType) GetMultipleRoomsOk() (*int32, bool)`

GetMultipleRoomsOk returns a tuple with the MultipleRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultipleRooms

`func (o *AwardsExceptionCriteriaType) SetMultipleRooms(v int32)`

SetMultipleRooms sets MultipleRooms field to given value.

### HasMultipleRooms

`func (o *AwardsExceptionCriteriaType) HasMultipleRooms() bool`

HasMultipleRooms returns a boolean if a field has been set.

### GetBBSingleProperty

`func (o *AwardsExceptionCriteriaType) GetBBSingleProperty() bool`

GetBBSingleProperty returns the BBSingleProperty field if non-nil, zero value otherwise.

### GetBBSinglePropertyOk

`func (o *AwardsExceptionCriteriaType) GetBBSinglePropertyOk() (*bool, bool)`

GetBBSinglePropertyOk returns a tuple with the BBSingleProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBBSingleProperty

`func (o *AwardsExceptionCriteriaType) SetBBSingleProperty(v bool)`

SetBBSingleProperty sets BBSingleProperty field to given value.

### HasBBSingleProperty

`func (o *AwardsExceptionCriteriaType) HasBBSingleProperty() bool`

HasBBSingleProperty returns a boolean if a field has been set.

### GetBBSingleGroup

`func (o *AwardsExceptionCriteriaType) GetBBSingleGroup() bool`

GetBBSingleGroup returns the BBSingleGroup field if non-nil, zero value otherwise.

### GetBBSingleGroupOk

`func (o *AwardsExceptionCriteriaType) GetBBSingleGroupOk() (*bool, bool)`

GetBBSingleGroupOk returns a tuple with the BBSingleGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBBSingleGroup

`func (o *AwardsExceptionCriteriaType) SetBBSingleGroup(v bool)`

SetBBSingleGroup sets BBSingleGroup field to given value.

### HasBBSingleGroup

`func (o *AwardsExceptionCriteriaType) HasBBSingleGroup() bool`

HasBBSingleGroup returns a boolean if a field has been set.

### GetBBCrossMembership

`func (o *AwardsExceptionCriteriaType) GetBBCrossMembership() bool`

GetBBCrossMembership returns the BBCrossMembership field if non-nil, zero value otherwise.

### GetBBCrossMembershipOk

`func (o *AwardsExceptionCriteriaType) GetBBCrossMembershipOk() (*bool, bool)`

GetBBCrossMembershipOk returns a tuple with the BBCrossMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBBCrossMembership

`func (o *AwardsExceptionCriteriaType) SetBBCrossMembership(v bool)`

SetBBCrossMembership sets BBCrossMembership field to given value.

### HasBBCrossMembership

`func (o *AwardsExceptionCriteriaType) HasBBCrossMembership() bool`

HasBBCrossMembership returns a boolean if a field has been set.

### GetExternalProcessingException

`func (o *AwardsExceptionCriteriaType) GetExternalProcessingException() int32`

GetExternalProcessingException returns the ExternalProcessingException field if non-nil, zero value otherwise.

### GetExternalProcessingExceptionOk

`func (o *AwardsExceptionCriteriaType) GetExternalProcessingExceptionOk() (*int32, bool)`

GetExternalProcessingExceptionOk returns a tuple with the ExternalProcessingException field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalProcessingException

`func (o *AwardsExceptionCriteriaType) SetExternalProcessingException(v int32)`

SetExternalProcessingException sets ExternalProcessingException field to given value.

### HasExternalProcessingException

`func (o *AwardsExceptionCriteriaType) HasExternalProcessingException() bool`

HasExternalProcessingException returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


