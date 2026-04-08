# RoutingInstructionsInfoCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folio** | Pointer to [**RoutingInstructionsInfoCriteriaFolio**](RoutingInstructionsInfoCriteriaFolio.md) |  | [optional] 
**Room** | Pointer to [**RoutingInstructionsInfoCriteriaRoom**](RoutingInstructionsInfoCriteriaRoom.md) |  | [optional] 
**Comp** | Pointer to [**RoutingInstructionsInfoCriteriaComp**](RoutingInstructionsInfoCriteriaComp.md) |  | [optional] 
**Request** | Pointer to [**RoutingInstructionsInfoCriteriaRequest**](RoutingInstructionsInfoCriteriaRequest.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel context of the reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RefreshFolio** | Pointer to **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | [optional] 
**RetrievePostingsForRoomRouting** | Pointer to **bool** | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. | [optional] 
**NewRoutingInfo** | Pointer to [**RoutingInfoType**](RoutingInfoType.md) |  | [optional] 

## Methods

### NewRoutingInstructionsInfoCriteria

`func NewRoutingInstructionsInfoCriteria() *RoutingInstructionsInfoCriteria`

NewRoutingInstructionsInfoCriteria instantiates a new RoutingInstructionsInfoCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsInfoCriteriaWithDefaults

`func NewRoutingInstructionsInfoCriteriaWithDefaults() *RoutingInstructionsInfoCriteria`

NewRoutingInstructionsInfoCriteriaWithDefaults instantiates a new RoutingInstructionsInfoCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolio

`func (o *RoutingInstructionsInfoCriteria) GetFolio() RoutingInstructionsInfoCriteriaFolio`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *RoutingInstructionsInfoCriteria) GetFolioOk() (*RoutingInstructionsInfoCriteriaFolio, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *RoutingInstructionsInfoCriteria) SetFolio(v RoutingInstructionsInfoCriteriaFolio)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *RoutingInstructionsInfoCriteria) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetRoom

`func (o *RoutingInstructionsInfoCriteria) GetRoom() RoutingInstructionsInfoCriteriaRoom`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *RoutingInstructionsInfoCriteria) GetRoomOk() (*RoutingInstructionsInfoCriteriaRoom, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *RoutingInstructionsInfoCriteria) SetRoom(v RoutingInstructionsInfoCriteriaRoom)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *RoutingInstructionsInfoCriteria) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetComp

`func (o *RoutingInstructionsInfoCriteria) GetComp() RoutingInstructionsInfoCriteriaComp`

GetComp returns the Comp field if non-nil, zero value otherwise.

### GetCompOk

`func (o *RoutingInstructionsInfoCriteria) GetCompOk() (*RoutingInstructionsInfoCriteriaComp, bool)`

GetCompOk returns a tuple with the Comp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComp

`func (o *RoutingInstructionsInfoCriteria) SetComp(v RoutingInstructionsInfoCriteriaComp)`

SetComp sets Comp field to given value.

### HasComp

`func (o *RoutingInstructionsInfoCriteria) HasComp() bool`

HasComp returns a boolean if a field has been set.

### GetRequest

`func (o *RoutingInstructionsInfoCriteria) GetRequest() RoutingInstructionsInfoCriteriaRequest`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *RoutingInstructionsInfoCriteria) GetRequestOk() (*RoutingInstructionsInfoCriteriaRequest, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *RoutingInstructionsInfoCriteria) SetRequest(v RoutingInstructionsInfoCriteriaRequest)`

SetRequest sets Request field to given value.

### HasRequest

`func (o *RoutingInstructionsInfoCriteria) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetHotelId

`func (o *RoutingInstructionsInfoCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoutingInstructionsInfoCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoutingInstructionsInfoCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoutingInstructionsInfoCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *RoutingInstructionsInfoCriteria) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *RoutingInstructionsInfoCriteria) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *RoutingInstructionsInfoCriteria) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *RoutingInstructionsInfoCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRefreshFolio

`func (o *RoutingInstructionsInfoCriteria) GetRefreshFolio() bool`

GetRefreshFolio returns the RefreshFolio field if non-nil, zero value otherwise.

### GetRefreshFolioOk

`func (o *RoutingInstructionsInfoCriteria) GetRefreshFolioOk() (*bool, bool)`

GetRefreshFolioOk returns a tuple with the RefreshFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshFolio

`func (o *RoutingInstructionsInfoCriteria) SetRefreshFolio(v bool)`

SetRefreshFolio sets RefreshFolio field to given value.

### HasRefreshFolio

`func (o *RoutingInstructionsInfoCriteria) HasRefreshFolio() bool`

HasRefreshFolio returns a boolean if a field has been set.

### GetRetrievePostingsForRoomRouting

`func (o *RoutingInstructionsInfoCriteria) GetRetrievePostingsForRoomRouting() bool`

GetRetrievePostingsForRoomRouting returns the RetrievePostingsForRoomRouting field if non-nil, zero value otherwise.

### GetRetrievePostingsForRoomRoutingOk

`func (o *RoutingInstructionsInfoCriteria) GetRetrievePostingsForRoomRoutingOk() (*bool, bool)`

GetRetrievePostingsForRoomRoutingOk returns a tuple with the RetrievePostingsForRoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetrievePostingsForRoomRouting

`func (o *RoutingInstructionsInfoCriteria) SetRetrievePostingsForRoomRouting(v bool)`

SetRetrievePostingsForRoomRouting sets RetrievePostingsForRoomRouting field to given value.

### HasRetrievePostingsForRoomRouting

`func (o *RoutingInstructionsInfoCriteria) HasRetrievePostingsForRoomRouting() bool`

HasRetrievePostingsForRoomRouting returns a boolean if a field has been set.

### GetNewRoutingInfo

`func (o *RoutingInstructionsInfoCriteria) GetNewRoutingInfo() RoutingInfoType`

GetNewRoutingInfo returns the NewRoutingInfo field if non-nil, zero value otherwise.

### GetNewRoutingInfoOk

`func (o *RoutingInstructionsInfoCriteria) GetNewRoutingInfoOk() (*RoutingInfoType, bool)`

GetNewRoutingInfoOk returns a tuple with the NewRoutingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRoutingInfo

`func (o *RoutingInstructionsInfoCriteria) SetNewRoutingInfo(v RoutingInfoType)`

SetNewRoutingInfo sets NewRoutingInfo field to given value.

### HasNewRoutingInfo

`func (o *RoutingInstructionsInfoCriteria) HasNewRoutingInfo() bool`

HasNewRoutingInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


