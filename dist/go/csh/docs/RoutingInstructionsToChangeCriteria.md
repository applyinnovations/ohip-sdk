# RoutingInstructionsToChangeCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folio** | Pointer to [**RoutingInstructionsToChangeCriteriaFolio**](RoutingInstructionsToChangeCriteriaFolio.md) |  | [optional] 
**Room** | Pointer to [**RoutingInstructionsToChangeCriteriaRoom**](RoutingInstructionsToChangeCriteriaRoom.md) |  | [optional] 
**Comp** | Pointer to [**RoutingInstructionsToChangeCriteriaComp**](RoutingInstructionsToChangeCriteriaComp.md) |  | [optional] 
**Request** | Pointer to [**RoutingInstructionsToChangeCriteriaRequest**](RoutingInstructionsToChangeCriteriaRequest.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel context of the reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RefreshFolio** | Pointer to **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | [optional] 
**RetrievePostingsForRoomRouting** | Pointer to **bool** | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. | [optional] 
**NewRoutingInfo** | Pointer to [**RoutingInfoType**](RoutingInfoType.md) |  | [optional] 

## Methods

### NewRoutingInstructionsToChangeCriteria

`func NewRoutingInstructionsToChangeCriteria() *RoutingInstructionsToChangeCriteria`

NewRoutingInstructionsToChangeCriteria instantiates a new RoutingInstructionsToChangeCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsToChangeCriteriaWithDefaults

`func NewRoutingInstructionsToChangeCriteriaWithDefaults() *RoutingInstructionsToChangeCriteria`

NewRoutingInstructionsToChangeCriteriaWithDefaults instantiates a new RoutingInstructionsToChangeCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolio

`func (o *RoutingInstructionsToChangeCriteria) GetFolio() RoutingInstructionsToChangeCriteriaFolio`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *RoutingInstructionsToChangeCriteria) GetFolioOk() (*RoutingInstructionsToChangeCriteriaFolio, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *RoutingInstructionsToChangeCriteria) SetFolio(v RoutingInstructionsToChangeCriteriaFolio)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *RoutingInstructionsToChangeCriteria) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetRoom

`func (o *RoutingInstructionsToChangeCriteria) GetRoom() RoutingInstructionsToChangeCriteriaRoom`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *RoutingInstructionsToChangeCriteria) GetRoomOk() (*RoutingInstructionsToChangeCriteriaRoom, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *RoutingInstructionsToChangeCriteria) SetRoom(v RoutingInstructionsToChangeCriteriaRoom)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *RoutingInstructionsToChangeCriteria) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetComp

`func (o *RoutingInstructionsToChangeCriteria) GetComp() RoutingInstructionsToChangeCriteriaComp`

GetComp returns the Comp field if non-nil, zero value otherwise.

### GetCompOk

`func (o *RoutingInstructionsToChangeCriteria) GetCompOk() (*RoutingInstructionsToChangeCriteriaComp, bool)`

GetCompOk returns a tuple with the Comp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComp

`func (o *RoutingInstructionsToChangeCriteria) SetComp(v RoutingInstructionsToChangeCriteriaComp)`

SetComp sets Comp field to given value.

### HasComp

`func (o *RoutingInstructionsToChangeCriteria) HasComp() bool`

HasComp returns a boolean if a field has been set.

### GetRequest

`func (o *RoutingInstructionsToChangeCriteria) GetRequest() RoutingInstructionsToChangeCriteriaRequest`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *RoutingInstructionsToChangeCriteria) GetRequestOk() (*RoutingInstructionsToChangeCriteriaRequest, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *RoutingInstructionsToChangeCriteria) SetRequest(v RoutingInstructionsToChangeCriteriaRequest)`

SetRequest sets Request field to given value.

### HasRequest

`func (o *RoutingInstructionsToChangeCriteria) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetHotelId

`func (o *RoutingInstructionsToChangeCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoutingInstructionsToChangeCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoutingInstructionsToChangeCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoutingInstructionsToChangeCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *RoutingInstructionsToChangeCriteria) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *RoutingInstructionsToChangeCriteria) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *RoutingInstructionsToChangeCriteria) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *RoutingInstructionsToChangeCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRefreshFolio

`func (o *RoutingInstructionsToChangeCriteria) GetRefreshFolio() bool`

GetRefreshFolio returns the RefreshFolio field if non-nil, zero value otherwise.

### GetRefreshFolioOk

`func (o *RoutingInstructionsToChangeCriteria) GetRefreshFolioOk() (*bool, bool)`

GetRefreshFolioOk returns a tuple with the RefreshFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshFolio

`func (o *RoutingInstructionsToChangeCriteria) SetRefreshFolio(v bool)`

SetRefreshFolio sets RefreshFolio field to given value.

### HasRefreshFolio

`func (o *RoutingInstructionsToChangeCriteria) HasRefreshFolio() bool`

HasRefreshFolio returns a boolean if a field has been set.

### GetRetrievePostingsForRoomRouting

`func (o *RoutingInstructionsToChangeCriteria) GetRetrievePostingsForRoomRouting() bool`

GetRetrievePostingsForRoomRouting returns the RetrievePostingsForRoomRouting field if non-nil, zero value otherwise.

### GetRetrievePostingsForRoomRoutingOk

`func (o *RoutingInstructionsToChangeCriteria) GetRetrievePostingsForRoomRoutingOk() (*bool, bool)`

GetRetrievePostingsForRoomRoutingOk returns a tuple with the RetrievePostingsForRoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetrievePostingsForRoomRouting

`func (o *RoutingInstructionsToChangeCriteria) SetRetrievePostingsForRoomRouting(v bool)`

SetRetrievePostingsForRoomRouting sets RetrievePostingsForRoomRouting field to given value.

### HasRetrievePostingsForRoomRouting

`func (o *RoutingInstructionsToChangeCriteria) HasRetrievePostingsForRoomRouting() bool`

HasRetrievePostingsForRoomRouting returns a boolean if a field has been set.

### GetNewRoutingInfo

`func (o *RoutingInstructionsToChangeCriteria) GetNewRoutingInfo() RoutingInfoType`

GetNewRoutingInfo returns the NewRoutingInfo field if non-nil, zero value otherwise.

### GetNewRoutingInfoOk

`func (o *RoutingInstructionsToChangeCriteria) GetNewRoutingInfoOk() (*RoutingInfoType, bool)`

GetNewRoutingInfoOk returns a tuple with the NewRoutingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRoutingInfo

`func (o *RoutingInstructionsToChangeCriteria) SetNewRoutingInfo(v RoutingInfoType)`

SetNewRoutingInfo sets NewRoutingInfo field to given value.

### HasNewRoutingInfo

`func (o *RoutingInstructionsToChangeCriteria) HasNewRoutingInfo() bool`

HasNewRoutingInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


