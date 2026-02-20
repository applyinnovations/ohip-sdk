# RoutingInstructionsMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**Folio** | Pointer to [**RoutingInstructionsMassUpdateCriteriaFolio**](RoutingInstructionsMassUpdateCriteriaFolio.md) |  | [optional] 
**Room** | Pointer to [**RoutingInstructionsMassUpdateCriteriaRoom**](RoutingInstructionsMassUpdateCriteriaRoom.md) |  | [optional] 
**RefreshFolio** | Pointer to **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | [optional] 

## Methods

### NewRoutingInstructionsMassUpdateCriteria

`func NewRoutingInstructionsMassUpdateCriteria() *RoutingInstructionsMassUpdateCriteria`

NewRoutingInstructionsMassUpdateCriteria instantiates a new RoutingInstructionsMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsMassUpdateCriteriaWithDefaults

`func NewRoutingInstructionsMassUpdateCriteriaWithDefaults() *RoutingInstructionsMassUpdateCriteria`

NewRoutingInstructionsMassUpdateCriteriaWithDefaults instantiates a new RoutingInstructionsMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *RoutingInstructionsMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *RoutingInstructionsMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *RoutingInstructionsMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *RoutingInstructionsMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetFolio

`func (o *RoutingInstructionsMassUpdateCriteria) GetFolio() RoutingInstructionsMassUpdateCriteriaFolio`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *RoutingInstructionsMassUpdateCriteria) GetFolioOk() (*RoutingInstructionsMassUpdateCriteriaFolio, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *RoutingInstructionsMassUpdateCriteria) SetFolio(v RoutingInstructionsMassUpdateCriteriaFolio)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *RoutingInstructionsMassUpdateCriteria) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetRoom

`func (o *RoutingInstructionsMassUpdateCriteria) GetRoom() RoutingInstructionsMassUpdateCriteriaRoom`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *RoutingInstructionsMassUpdateCriteria) GetRoomOk() (*RoutingInstructionsMassUpdateCriteriaRoom, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *RoutingInstructionsMassUpdateCriteria) SetRoom(v RoutingInstructionsMassUpdateCriteriaRoom)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *RoutingInstructionsMassUpdateCriteria) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetRefreshFolio

`func (o *RoutingInstructionsMassUpdateCriteria) GetRefreshFolio() bool`

GetRefreshFolio returns the RefreshFolio field if non-nil, zero value otherwise.

### GetRefreshFolioOk

`func (o *RoutingInstructionsMassUpdateCriteria) GetRefreshFolioOk() (*bool, bool)`

GetRefreshFolioOk returns a tuple with the RefreshFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshFolio

`func (o *RoutingInstructionsMassUpdateCriteria) SetRefreshFolio(v bool)`

SetRefreshFolio sets RefreshFolio field to given value.

### HasRefreshFolio

`func (o *RoutingInstructionsMassUpdateCriteria) HasRefreshFolio() bool`

HasRefreshFolio returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


