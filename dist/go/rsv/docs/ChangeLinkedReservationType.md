# ChangeLinkedReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedReservationInfo** | Pointer to [**LinkedReservationInfoType**](LinkedReservationInfoType.md) |  | [optional] 
**BackToBackToReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewChangeLinkedReservationType

`func NewChangeLinkedReservationType() *ChangeLinkedReservationType`

NewChangeLinkedReservationType instantiates a new ChangeLinkedReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeLinkedReservationTypeWithDefaults

`func NewChangeLinkedReservationTypeWithDefaults() *ChangeLinkedReservationType`

NewChangeLinkedReservationTypeWithDefaults instantiates a new ChangeLinkedReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedReservationInfo

`func (o *ChangeLinkedReservationType) GetLinkedReservationInfo() LinkedReservationInfoType`

GetLinkedReservationInfo returns the LinkedReservationInfo field if non-nil, zero value otherwise.

### GetLinkedReservationInfoOk

`func (o *ChangeLinkedReservationType) GetLinkedReservationInfoOk() (*LinkedReservationInfoType, bool)`

GetLinkedReservationInfoOk returns a tuple with the LinkedReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedReservationInfo

`func (o *ChangeLinkedReservationType) SetLinkedReservationInfo(v LinkedReservationInfoType)`

SetLinkedReservationInfo sets LinkedReservationInfo field to given value.

### HasLinkedReservationInfo

`func (o *ChangeLinkedReservationType) HasLinkedReservationInfo() bool`

HasLinkedReservationInfo returns a boolean if a field has been set.

### GetBackToBackToReservationId

`func (o *ChangeLinkedReservationType) GetBackToBackToReservationId() UniqueIDType`

GetBackToBackToReservationId returns the BackToBackToReservationId field if non-nil, zero value otherwise.

### GetBackToBackToReservationIdOk

`func (o *ChangeLinkedReservationType) GetBackToBackToReservationIdOk() (*UniqueIDType, bool)`

GetBackToBackToReservationIdOk returns a tuple with the BackToBackToReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackToBackToReservationId

`func (o *ChangeLinkedReservationType) SetBackToBackToReservationId(v UniqueIDType)`

SetBackToBackToReservationId sets BackToBackToReservationId field to given value.

### HasBackToBackToReservationId

`func (o *ChangeLinkedReservationType) HasBackToBackToReservationId() bool`

HasBackToBackToReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


