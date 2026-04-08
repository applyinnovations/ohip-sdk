# RevenueInventoryStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Property** | Pointer to **string** | The property for which revenue inventory statistics are fetched | [optional] 
**OccupancyDate** | Pointer to **string** | The occupancy date for which the revenue inventory statistics are fetched. | [optional] 
**ResType** | Pointer to **string** |  | [optional] 
**MarketCode** | Pointer to **string** | The market code for which the revenue inventory statistics are fetched. | [optional] 
**RoomType** | Pointer to **string** | The room type for which the revenue inventory statistics are fetched. | [optional] 
**PhysicalRooms** | Pointer to **string** | The statistical figure for physical rooms. | [optional] 
**OoRooms** | Pointer to **string** | The statistical figure for out of order rooms. | [optional] 
**OsRooms** | Pointer to **string** | The statistical figure for out of service rooms. | [optional] 
**RoomsSold** | Pointer to **string** | The statistical figure for rooms sold. | [optional] 
**RoomRevenue** | Pointer to **string** | The statistical figure for room revenue. | [optional] 
**RoomArrivals** | Pointer to **string** | The statistical figure for arrival rooms. | [optional] 
**RoomDepartures** | Pointer to **string** | The statistical figure of departure rooms. | [optional] 
**FoodRevenue** | Pointer to **string** | The statistical figure for food revenue. | [optional] 
**TotalRevenue** | Pointer to **string** | The statistical figure for total revenue. | [optional] 
**CancelledRooms** | Pointer to **string** | The statistical figure for canceled rooms. | [optional] 
**NoShowRooms** | Pointer to **string** | The statistical figure of no show rooms. | [optional] 

## Methods

### NewRevenueInventoryStatisticsType

`func NewRevenueInventoryStatisticsType() *RevenueInventoryStatisticsType`

NewRevenueInventoryStatisticsType instantiates a new RevenueInventoryStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueInventoryStatisticsTypeWithDefaults

`func NewRevenueInventoryStatisticsTypeWithDefaults() *RevenueInventoryStatisticsType`

NewRevenueInventoryStatisticsTypeWithDefaults instantiates a new RevenueInventoryStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProperty

`func (o *RevenueInventoryStatisticsType) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *RevenueInventoryStatisticsType) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *RevenueInventoryStatisticsType) SetProperty(v string)`

SetProperty sets Property field to given value.

### HasProperty

`func (o *RevenueInventoryStatisticsType) HasProperty() bool`

HasProperty returns a boolean if a field has been set.

### GetOccupancyDate

`func (o *RevenueInventoryStatisticsType) GetOccupancyDate() string`

GetOccupancyDate returns the OccupancyDate field if non-nil, zero value otherwise.

### GetOccupancyDateOk

`func (o *RevenueInventoryStatisticsType) GetOccupancyDateOk() (*string, bool)`

GetOccupancyDateOk returns a tuple with the OccupancyDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupancyDate

`func (o *RevenueInventoryStatisticsType) SetOccupancyDate(v string)`

SetOccupancyDate sets OccupancyDate field to given value.

### HasOccupancyDate

`func (o *RevenueInventoryStatisticsType) HasOccupancyDate() bool`

HasOccupancyDate returns a boolean if a field has been set.

### GetResType

`func (o *RevenueInventoryStatisticsType) GetResType() string`

GetResType returns the ResType field if non-nil, zero value otherwise.

### GetResTypeOk

`func (o *RevenueInventoryStatisticsType) GetResTypeOk() (*string, bool)`

GetResTypeOk returns a tuple with the ResType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResType

`func (o *RevenueInventoryStatisticsType) SetResType(v string)`

SetResType sets ResType field to given value.

### HasResType

`func (o *RevenueInventoryStatisticsType) HasResType() bool`

HasResType returns a boolean if a field has been set.

### GetMarketCode

`func (o *RevenueInventoryStatisticsType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *RevenueInventoryStatisticsType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *RevenueInventoryStatisticsType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *RevenueInventoryStatisticsType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetRoomType

`func (o *RevenueInventoryStatisticsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RevenueInventoryStatisticsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RevenueInventoryStatisticsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RevenueInventoryStatisticsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetPhysicalRooms

`func (o *RevenueInventoryStatisticsType) GetPhysicalRooms() string`

GetPhysicalRooms returns the PhysicalRooms field if non-nil, zero value otherwise.

### GetPhysicalRoomsOk

`func (o *RevenueInventoryStatisticsType) GetPhysicalRoomsOk() (*string, bool)`

GetPhysicalRoomsOk returns a tuple with the PhysicalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhysicalRooms

`func (o *RevenueInventoryStatisticsType) SetPhysicalRooms(v string)`

SetPhysicalRooms sets PhysicalRooms field to given value.

### HasPhysicalRooms

`func (o *RevenueInventoryStatisticsType) HasPhysicalRooms() bool`

HasPhysicalRooms returns a boolean if a field has been set.

### GetOoRooms

`func (o *RevenueInventoryStatisticsType) GetOoRooms() string`

GetOoRooms returns the OoRooms field if non-nil, zero value otherwise.

### GetOoRoomsOk

`func (o *RevenueInventoryStatisticsType) GetOoRoomsOk() (*string, bool)`

GetOoRoomsOk returns a tuple with the OoRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOoRooms

`func (o *RevenueInventoryStatisticsType) SetOoRooms(v string)`

SetOoRooms sets OoRooms field to given value.

### HasOoRooms

`func (o *RevenueInventoryStatisticsType) HasOoRooms() bool`

HasOoRooms returns a boolean if a field has been set.

### GetOsRooms

`func (o *RevenueInventoryStatisticsType) GetOsRooms() string`

GetOsRooms returns the OsRooms field if non-nil, zero value otherwise.

### GetOsRoomsOk

`func (o *RevenueInventoryStatisticsType) GetOsRoomsOk() (*string, bool)`

GetOsRoomsOk returns a tuple with the OsRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOsRooms

`func (o *RevenueInventoryStatisticsType) SetOsRooms(v string)`

SetOsRooms sets OsRooms field to given value.

### HasOsRooms

`func (o *RevenueInventoryStatisticsType) HasOsRooms() bool`

HasOsRooms returns a boolean if a field has been set.

### GetRoomsSold

`func (o *RevenueInventoryStatisticsType) GetRoomsSold() string`

GetRoomsSold returns the RoomsSold field if non-nil, zero value otherwise.

### GetRoomsSoldOk

`func (o *RevenueInventoryStatisticsType) GetRoomsSoldOk() (*string, bool)`

GetRoomsSoldOk returns a tuple with the RoomsSold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsSold

`func (o *RevenueInventoryStatisticsType) SetRoomsSold(v string)`

SetRoomsSold sets RoomsSold field to given value.

### HasRoomsSold

`func (o *RevenueInventoryStatisticsType) HasRoomsSold() bool`

HasRoomsSold returns a boolean if a field has been set.

### GetRoomRevenue

`func (o *RevenueInventoryStatisticsType) GetRoomRevenue() string`

GetRoomRevenue returns the RoomRevenue field if non-nil, zero value otherwise.

### GetRoomRevenueOk

`func (o *RevenueInventoryStatisticsType) GetRoomRevenueOk() (*string, bool)`

GetRoomRevenueOk returns a tuple with the RoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRevenue

`func (o *RevenueInventoryStatisticsType) SetRoomRevenue(v string)`

SetRoomRevenue sets RoomRevenue field to given value.

### HasRoomRevenue

`func (o *RevenueInventoryStatisticsType) HasRoomRevenue() bool`

HasRoomRevenue returns a boolean if a field has been set.

### GetRoomArrivals

`func (o *RevenueInventoryStatisticsType) GetRoomArrivals() string`

GetRoomArrivals returns the RoomArrivals field if non-nil, zero value otherwise.

### GetRoomArrivalsOk

`func (o *RevenueInventoryStatisticsType) GetRoomArrivalsOk() (*string, bool)`

GetRoomArrivalsOk returns a tuple with the RoomArrivals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomArrivals

`func (o *RevenueInventoryStatisticsType) SetRoomArrivals(v string)`

SetRoomArrivals sets RoomArrivals field to given value.

### HasRoomArrivals

`func (o *RevenueInventoryStatisticsType) HasRoomArrivals() bool`

HasRoomArrivals returns a boolean if a field has been set.

### GetRoomDepartures

`func (o *RevenueInventoryStatisticsType) GetRoomDepartures() string`

GetRoomDepartures returns the RoomDepartures field if non-nil, zero value otherwise.

### GetRoomDeparturesOk

`func (o *RevenueInventoryStatisticsType) GetRoomDeparturesOk() (*string, bool)`

GetRoomDeparturesOk returns a tuple with the RoomDepartures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDepartures

`func (o *RevenueInventoryStatisticsType) SetRoomDepartures(v string)`

SetRoomDepartures sets RoomDepartures field to given value.

### HasRoomDepartures

`func (o *RevenueInventoryStatisticsType) HasRoomDepartures() bool`

HasRoomDepartures returns a boolean if a field has been set.

### GetFoodRevenue

`func (o *RevenueInventoryStatisticsType) GetFoodRevenue() string`

GetFoodRevenue returns the FoodRevenue field if non-nil, zero value otherwise.

### GetFoodRevenueOk

`func (o *RevenueInventoryStatisticsType) GetFoodRevenueOk() (*string, bool)`

GetFoodRevenueOk returns a tuple with the FoodRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFoodRevenue

`func (o *RevenueInventoryStatisticsType) SetFoodRevenue(v string)`

SetFoodRevenue sets FoodRevenue field to given value.

### HasFoodRevenue

`func (o *RevenueInventoryStatisticsType) HasFoodRevenue() bool`

HasFoodRevenue returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *RevenueInventoryStatisticsType) GetTotalRevenue() string`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *RevenueInventoryStatisticsType) GetTotalRevenueOk() (*string, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *RevenueInventoryStatisticsType) SetTotalRevenue(v string)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *RevenueInventoryStatisticsType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetCancelledRooms

`func (o *RevenueInventoryStatisticsType) GetCancelledRooms() string`

GetCancelledRooms returns the CancelledRooms field if non-nil, zero value otherwise.

### GetCancelledRoomsOk

`func (o *RevenueInventoryStatisticsType) GetCancelledRoomsOk() (*string, bool)`

GetCancelledRoomsOk returns a tuple with the CancelledRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledRooms

`func (o *RevenueInventoryStatisticsType) SetCancelledRooms(v string)`

SetCancelledRooms sets CancelledRooms field to given value.

### HasCancelledRooms

`func (o *RevenueInventoryStatisticsType) HasCancelledRooms() bool`

HasCancelledRooms returns a boolean if a field has been set.

### GetNoShowRooms

`func (o *RevenueInventoryStatisticsType) GetNoShowRooms() string`

GetNoShowRooms returns the NoShowRooms field if non-nil, zero value otherwise.

### GetNoShowRoomsOk

`func (o *RevenueInventoryStatisticsType) GetNoShowRoomsOk() (*string, bool)`

GetNoShowRoomsOk returns a tuple with the NoShowRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoShowRooms

`func (o *RevenueInventoryStatisticsType) SetNoShowRooms(v string)`

SetNoShowRooms sets NoShowRooms field to given value.

### HasNoShowRooms

`func (o *RevenueInventoryStatisticsType) HasNoShowRooms() bool`

HasNoShowRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


