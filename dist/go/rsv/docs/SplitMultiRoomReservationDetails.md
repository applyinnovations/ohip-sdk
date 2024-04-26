# SplitMultiRoomReservationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedReservations** | Pointer to [**LinkedReservationsInfoType**](LinkedReservationsInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NewReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSplitMultiRoomReservationDetails

`func NewSplitMultiRoomReservationDetails() *SplitMultiRoomReservationDetails`

NewSplitMultiRoomReservationDetails instantiates a new SplitMultiRoomReservationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitMultiRoomReservationDetailsWithDefaults

`func NewSplitMultiRoomReservationDetailsWithDefaults() *SplitMultiRoomReservationDetails`

NewSplitMultiRoomReservationDetailsWithDefaults instantiates a new SplitMultiRoomReservationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedReservations

`func (o *SplitMultiRoomReservationDetails) GetLinkedReservations() LinkedReservationsInfoType`

GetLinkedReservations returns the LinkedReservations field if non-nil, zero value otherwise.

### GetLinkedReservationsOk

`func (o *SplitMultiRoomReservationDetails) GetLinkedReservationsOk() (*LinkedReservationsInfoType, bool)`

GetLinkedReservationsOk returns a tuple with the LinkedReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedReservations

`func (o *SplitMultiRoomReservationDetails) SetLinkedReservations(v LinkedReservationsInfoType)`

SetLinkedReservations sets LinkedReservations field to given value.

### HasLinkedReservations

`func (o *SplitMultiRoomReservationDetails) HasLinkedReservations() bool`

HasLinkedReservations returns a boolean if a field has been set.

### GetLinks

`func (o *SplitMultiRoomReservationDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SplitMultiRoomReservationDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SplitMultiRoomReservationDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SplitMultiRoomReservationDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewReservationIdList

`func (o *SplitMultiRoomReservationDetails) GetNewReservationIdList() []UniqueIDType`

GetNewReservationIdList returns the NewReservationIdList field if non-nil, zero value otherwise.

### GetNewReservationIdListOk

`func (o *SplitMultiRoomReservationDetails) GetNewReservationIdListOk() (*[]UniqueIDType, bool)`

GetNewReservationIdListOk returns a tuple with the NewReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewReservationIdList

`func (o *SplitMultiRoomReservationDetails) SetNewReservationIdList(v []UniqueIDType)`

SetNewReservationIdList sets NewReservationIdList field to given value.

### HasNewReservationIdList

`func (o *SplitMultiRoomReservationDetails) HasNewReservationIdList() bool`

HasNewReservationIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *SplitMultiRoomReservationDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SplitMultiRoomReservationDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SplitMultiRoomReservationDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SplitMultiRoomReservationDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


