# ReservationInterface

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationInterfaceStatus** | Pointer to [**ReservationInterfaceReservationInterfaceStatus**](ReservationInterfaceReservationInterfaceStatus.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReservationInterface

`func NewReservationInterface() *ReservationInterface`

NewReservationInterface instantiates a new ReservationInterface object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationInterfaceWithDefaults

`func NewReservationInterfaceWithDefaults() *ReservationInterface`

NewReservationInterfaceWithDefaults instantiates a new ReservationInterface object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationInterface) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationInterface) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationInterface) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationInterface) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationInterfaceStatus

`func (o *ReservationInterface) GetReservationInterfaceStatus() ReservationInterfaceReservationInterfaceStatus`

GetReservationInterfaceStatus returns the ReservationInterfaceStatus field if non-nil, zero value otherwise.

### GetReservationInterfaceStatusOk

`func (o *ReservationInterface) GetReservationInterfaceStatusOk() (*ReservationInterfaceReservationInterfaceStatus, bool)`

GetReservationInterfaceStatusOk returns a tuple with the ReservationInterfaceStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInterfaceStatus

`func (o *ReservationInterface) SetReservationInterfaceStatus(v ReservationInterfaceReservationInterfaceStatus)`

SetReservationInterfaceStatus sets ReservationInterfaceStatus field to given value.

### HasReservationInterfaceStatus

`func (o *ReservationInterface) HasReservationInterfaceStatus() bool`

HasReservationInterfaceStatus returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationInterface) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationInterface) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationInterface) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationInterface) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


