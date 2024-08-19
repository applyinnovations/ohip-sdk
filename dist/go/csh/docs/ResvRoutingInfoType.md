# ResvRoutingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comp** | Pointer to [**ResvRoutingCriteriaTypeComp**](ResvRoutingCriteriaTypeComp.md) |  | [optional] 
**Folio** | Pointer to [**ResvRoutingCriteriaTypeFolio**](ResvRoutingCriteriaTypeFolio.md) |  | [optional] 
**RefreshFolio** | Pointer to **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | [optional] 
**Request** | Pointer to [**ResvRoutingCriteriaTypeRequest**](ResvRoutingCriteriaTypeRequest.md) |  | [optional] 
**ReservationInfo** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**Room** | Pointer to [**ResvRoutingCriteriaTypeRoom**](ResvRoutingCriteriaTypeRoom.md) |  | [optional] 

## Methods

### NewResvRoutingInfoType

`func NewResvRoutingInfoType() *ResvRoutingInfoType`

NewResvRoutingInfoType instantiates a new ResvRoutingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvRoutingInfoTypeWithDefaults

`func NewResvRoutingInfoTypeWithDefaults() *ResvRoutingInfoType`

NewResvRoutingInfoTypeWithDefaults instantiates a new ResvRoutingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComp

`func (o *ResvRoutingInfoType) GetComp() ResvRoutingCriteriaTypeComp`

GetComp returns the Comp field if non-nil, zero value otherwise.

### GetCompOk

`func (o *ResvRoutingInfoType) GetCompOk() (*ResvRoutingCriteriaTypeComp, bool)`

GetCompOk returns a tuple with the Comp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComp

`func (o *ResvRoutingInfoType) SetComp(v ResvRoutingCriteriaTypeComp)`

SetComp sets Comp field to given value.

### HasComp

`func (o *ResvRoutingInfoType) HasComp() bool`

HasComp returns a boolean if a field has been set.

### GetFolio

`func (o *ResvRoutingInfoType) GetFolio() ResvRoutingCriteriaTypeFolio`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *ResvRoutingInfoType) GetFolioOk() (*ResvRoutingCriteriaTypeFolio, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *ResvRoutingInfoType) SetFolio(v ResvRoutingCriteriaTypeFolio)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *ResvRoutingInfoType) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetRefreshFolio

`func (o *ResvRoutingInfoType) GetRefreshFolio() bool`

GetRefreshFolio returns the RefreshFolio field if non-nil, zero value otherwise.

### GetRefreshFolioOk

`func (o *ResvRoutingInfoType) GetRefreshFolioOk() (*bool, bool)`

GetRefreshFolioOk returns a tuple with the RefreshFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshFolio

`func (o *ResvRoutingInfoType) SetRefreshFolio(v bool)`

SetRefreshFolio sets RefreshFolio field to given value.

### HasRefreshFolio

`func (o *ResvRoutingInfoType) HasRefreshFolio() bool`

HasRefreshFolio returns a boolean if a field has been set.

### GetRequest

`func (o *ResvRoutingInfoType) GetRequest() ResvRoutingCriteriaTypeRequest`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *ResvRoutingInfoType) GetRequestOk() (*ResvRoutingCriteriaTypeRequest, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *ResvRoutingInfoType) SetRequest(v ResvRoutingCriteriaTypeRequest)`

SetRequest sets Request field to given value.

### HasRequest

`func (o *ResvRoutingInfoType) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetReservationInfo

`func (o *ResvRoutingInfoType) GetReservationInfo() ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ResvRoutingInfoType) GetReservationInfoOk() (*ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ResvRoutingInfoType) SetReservationInfo(v ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ResvRoutingInfoType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetRoom

`func (o *ResvRoutingInfoType) GetRoom() ResvRoutingCriteriaTypeRoom`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ResvRoutingInfoType) GetRoomOk() (*ResvRoutingCriteriaTypeRoom, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ResvRoutingInfoType) SetRoom(v ResvRoutingCriteriaTypeRoom)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ResvRoutingInfoType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


