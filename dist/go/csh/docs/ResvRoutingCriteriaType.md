# ResvRoutingCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folio** | Pointer to [**ResvRoutingInfoTypeFolio**](ResvRoutingInfoTypeFolio.md) |  | [optional] 
**Room** | Pointer to [**ResvRoutingInfoTypeRoom**](ResvRoutingInfoTypeRoom.md) |  | [optional] 
**Comp** | Pointer to [**ResvRoutingInfoTypeComp**](ResvRoutingInfoTypeComp.md) |  | [optional] 
**Request** | Pointer to [**ResvRoutingInfoTypeRequest**](ResvRoutingInfoTypeRequest.md) |  | [optional] 
**RefreshFolio** | Pointer to **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | [optional] 
**HotelId** | Pointer to **string** | Hotel context of the reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RetrievePostingsForRoomRouting** | Pointer to **bool** | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. | [optional] 

## Methods

### NewResvRoutingCriteriaType

`func NewResvRoutingCriteriaType() *ResvRoutingCriteriaType`

NewResvRoutingCriteriaType instantiates a new ResvRoutingCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvRoutingCriteriaTypeWithDefaults

`func NewResvRoutingCriteriaTypeWithDefaults() *ResvRoutingCriteriaType`

NewResvRoutingCriteriaTypeWithDefaults instantiates a new ResvRoutingCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolio

`func (o *ResvRoutingCriteriaType) GetFolio() ResvRoutingInfoTypeFolio`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *ResvRoutingCriteriaType) GetFolioOk() (*ResvRoutingInfoTypeFolio, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *ResvRoutingCriteriaType) SetFolio(v ResvRoutingInfoTypeFolio)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *ResvRoutingCriteriaType) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetRoom

`func (o *ResvRoutingCriteriaType) GetRoom() ResvRoutingInfoTypeRoom`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ResvRoutingCriteriaType) GetRoomOk() (*ResvRoutingInfoTypeRoom, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ResvRoutingCriteriaType) SetRoom(v ResvRoutingInfoTypeRoom)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ResvRoutingCriteriaType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetComp

`func (o *ResvRoutingCriteriaType) GetComp() ResvRoutingInfoTypeComp`

GetComp returns the Comp field if non-nil, zero value otherwise.

### GetCompOk

`func (o *ResvRoutingCriteriaType) GetCompOk() (*ResvRoutingInfoTypeComp, bool)`

GetCompOk returns a tuple with the Comp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComp

`func (o *ResvRoutingCriteriaType) SetComp(v ResvRoutingInfoTypeComp)`

SetComp sets Comp field to given value.

### HasComp

`func (o *ResvRoutingCriteriaType) HasComp() bool`

HasComp returns a boolean if a field has been set.

### GetRequest

`func (o *ResvRoutingCriteriaType) GetRequest() ResvRoutingInfoTypeRequest`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *ResvRoutingCriteriaType) GetRequestOk() (*ResvRoutingInfoTypeRequest, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *ResvRoutingCriteriaType) SetRequest(v ResvRoutingInfoTypeRequest)`

SetRequest sets Request field to given value.

### HasRequest

`func (o *ResvRoutingCriteriaType) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetRefreshFolio

`func (o *ResvRoutingCriteriaType) GetRefreshFolio() bool`

GetRefreshFolio returns the RefreshFolio field if non-nil, zero value otherwise.

### GetRefreshFolioOk

`func (o *ResvRoutingCriteriaType) GetRefreshFolioOk() (*bool, bool)`

GetRefreshFolioOk returns a tuple with the RefreshFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshFolio

`func (o *ResvRoutingCriteriaType) SetRefreshFolio(v bool)`

SetRefreshFolio sets RefreshFolio field to given value.

### HasRefreshFolio

`func (o *ResvRoutingCriteriaType) HasRefreshFolio() bool`

HasRefreshFolio returns a boolean if a field has been set.

### GetHotelId

`func (o *ResvRoutingCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ResvRoutingCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ResvRoutingCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ResvRoutingCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ResvRoutingCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ResvRoutingCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ResvRoutingCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ResvRoutingCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRetrievePostingsForRoomRouting

`func (o *ResvRoutingCriteriaType) GetRetrievePostingsForRoomRouting() bool`

GetRetrievePostingsForRoomRouting returns the RetrievePostingsForRoomRouting field if non-nil, zero value otherwise.

### GetRetrievePostingsForRoomRoutingOk

`func (o *ResvRoutingCriteriaType) GetRetrievePostingsForRoomRoutingOk() (*bool, bool)`

GetRetrievePostingsForRoomRoutingOk returns a tuple with the RetrievePostingsForRoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetrievePostingsForRoomRouting

`func (o *ResvRoutingCriteriaType) SetRetrievePostingsForRoomRouting(v bool)`

SetRetrievePostingsForRoomRouting sets RetrievePostingsForRoomRouting field to given value.

### HasRetrievePostingsForRoomRouting

`func (o *ResvRoutingCriteriaType) HasRetrievePostingsForRoomRouting() bool`

HasRetrievePostingsForRoomRouting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


