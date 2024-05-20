# RoutingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comp** | Pointer to [**RoutingInfoTypeComp**](RoutingInfoTypeComp.md) |  | [optional] 
**Folio** | Pointer to [**RoutingInfoTypeFolio**](RoutingInfoTypeFolio.md) |  | [optional] 
**RefreshFolio** | Pointer to **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | [optional] 
**Request** | Pointer to [**RoutingInfoTypeRequest**](RoutingInfoTypeRequest.md) |  | [optional] 
**Room** | Pointer to [**RoutingInfoTypeRoom**](RoutingInfoTypeRoom.md) |  | [optional] 

## Methods

### NewRoutingInfoType

`func NewRoutingInfoType() *RoutingInfoType`

NewRoutingInfoType instantiates a new RoutingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInfoTypeWithDefaults

`func NewRoutingInfoTypeWithDefaults() *RoutingInfoType`

NewRoutingInfoTypeWithDefaults instantiates a new RoutingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComp

`func (o *RoutingInfoType) GetComp() RoutingInfoTypeComp`

GetComp returns the Comp field if non-nil, zero value otherwise.

### GetCompOk

`func (o *RoutingInfoType) GetCompOk() (*RoutingInfoTypeComp, bool)`

GetCompOk returns a tuple with the Comp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComp

`func (o *RoutingInfoType) SetComp(v RoutingInfoTypeComp)`

SetComp sets Comp field to given value.

### HasComp

`func (o *RoutingInfoType) HasComp() bool`

HasComp returns a boolean if a field has been set.

### GetFolio

`func (o *RoutingInfoType) GetFolio() RoutingInfoTypeFolio`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *RoutingInfoType) GetFolioOk() (*RoutingInfoTypeFolio, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *RoutingInfoType) SetFolio(v RoutingInfoTypeFolio)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *RoutingInfoType) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetRefreshFolio

`func (o *RoutingInfoType) GetRefreshFolio() bool`

GetRefreshFolio returns the RefreshFolio field if non-nil, zero value otherwise.

### GetRefreshFolioOk

`func (o *RoutingInfoType) GetRefreshFolioOk() (*bool, bool)`

GetRefreshFolioOk returns a tuple with the RefreshFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshFolio

`func (o *RoutingInfoType) SetRefreshFolio(v bool)`

SetRefreshFolio sets RefreshFolio field to given value.

### HasRefreshFolio

`func (o *RoutingInfoType) HasRefreshFolio() bool`

HasRefreshFolio returns a boolean if a field has been set.

### GetRequest

`func (o *RoutingInfoType) GetRequest() RoutingInfoTypeRequest`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *RoutingInfoType) GetRequestOk() (*RoutingInfoTypeRequest, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *RoutingInfoType) SetRequest(v RoutingInfoTypeRequest)`

SetRequest sets Request field to given value.

### HasRequest

`func (o *RoutingInfoType) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetRoom

`func (o *RoutingInfoType) GetRoom() RoutingInfoTypeRoom`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *RoutingInfoType) GetRoomOk() (*RoutingInfoTypeRoom, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *RoutingInfoType) SetRoom(v RoutingInfoTypeRoom)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *RoutingInfoType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


