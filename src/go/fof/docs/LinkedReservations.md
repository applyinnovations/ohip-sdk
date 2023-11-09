# LinkedReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedReservationList** | Pointer to [**LinkedReservationsInfoType**](LinkedReservationsInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewLinkedReservations

`func NewLinkedReservations() *LinkedReservations`

NewLinkedReservations instantiates a new LinkedReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedReservationsWithDefaults

`func NewLinkedReservationsWithDefaults() *LinkedReservations`

NewLinkedReservationsWithDefaults instantiates a new LinkedReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedReservationList

`func (o *LinkedReservations) GetLinkedReservationList() LinkedReservationsInfoType`

GetLinkedReservationList returns the LinkedReservationList field if non-nil, zero value otherwise.

### GetLinkedReservationListOk

`func (o *LinkedReservations) GetLinkedReservationListOk() (*LinkedReservationsInfoType, bool)`

GetLinkedReservationListOk returns a tuple with the LinkedReservationList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedReservationList

`func (o *LinkedReservations) SetLinkedReservationList(v LinkedReservationsInfoType)`

SetLinkedReservationList sets LinkedReservationList field to given value.

### HasLinkedReservationList

`func (o *LinkedReservations) HasLinkedReservationList() bool`

HasLinkedReservationList returns a boolean if a field has been set.

### GetLinks

`func (o *LinkedReservations) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LinkedReservations) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LinkedReservations) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LinkedReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LinkedReservations) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LinkedReservations) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LinkedReservations) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LinkedReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


