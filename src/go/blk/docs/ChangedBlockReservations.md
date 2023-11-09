# ChangedBlockReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservations** | Pointer to [**[]ChangeBlockReservationType**](ChangeBlockReservationType.md) | Contains details of the changed reservation along with a success or error message. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangedBlockReservations

`func NewChangedBlockReservations() *ChangedBlockReservations`

NewChangedBlockReservations instantiates a new ChangedBlockReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangedBlockReservationsWithDefaults

`func NewChangedBlockReservationsWithDefaults() *ChangedBlockReservations`

NewChangedBlockReservationsWithDefaults instantiates a new ChangedBlockReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangedBlockReservations) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangedBlockReservations) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangedBlockReservations) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangedBlockReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *ChangedBlockReservations) GetReservations() []ChangeBlockReservationType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *ChangedBlockReservations) GetReservationsOk() (*[]ChangeBlockReservationType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *ChangedBlockReservations) SetReservations(v []ChangeBlockReservationType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *ChangedBlockReservations) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangedBlockReservations) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangedBlockReservations) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangedBlockReservations) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangedBlockReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


