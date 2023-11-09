# HotelRoomMaintenanceReasonsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**HotelRoomMaintenanceReasons** | Pointer to [**HotelRoomMaintenanceReasonsType**](HotelRoomMaintenanceReasonsType.md) |  | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewHotelRoomMaintenanceReasonsDetails

`func NewHotelRoomMaintenanceReasonsDetails() *HotelRoomMaintenanceReasonsDetails`

NewHotelRoomMaintenanceReasonsDetails instantiates a new HotelRoomMaintenanceReasonsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelRoomMaintenanceReasonsDetailsWithDefaults

`func NewHotelRoomMaintenanceReasonsDetailsWithDefaults() *HotelRoomMaintenanceReasonsDetails`

NewHotelRoomMaintenanceReasonsDetailsWithDefaults instantiates a new HotelRoomMaintenanceReasonsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *HotelRoomMaintenanceReasonsDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *HotelRoomMaintenanceReasonsDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *HotelRoomMaintenanceReasonsDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *HotelRoomMaintenanceReasonsDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *HotelRoomMaintenanceReasonsDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *HotelRoomMaintenanceReasonsDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetHotelRoomMaintenanceReasons

`func (o *HotelRoomMaintenanceReasonsDetails) GetHotelRoomMaintenanceReasons() HotelRoomMaintenanceReasonsType`

GetHotelRoomMaintenanceReasons returns the HotelRoomMaintenanceReasons field if non-nil, zero value otherwise.

### GetHotelRoomMaintenanceReasonsOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetHotelRoomMaintenanceReasonsOk() (*HotelRoomMaintenanceReasonsType, bool)`

GetHotelRoomMaintenanceReasonsOk returns a tuple with the HotelRoomMaintenanceReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRoomMaintenanceReasons

`func (o *HotelRoomMaintenanceReasonsDetails) SetHotelRoomMaintenanceReasons(v HotelRoomMaintenanceReasonsType)`

SetHotelRoomMaintenanceReasons sets HotelRoomMaintenanceReasons field to given value.

### HasHotelRoomMaintenanceReasons

`func (o *HotelRoomMaintenanceReasonsDetails) HasHotelRoomMaintenanceReasons() bool`

HasHotelRoomMaintenanceReasons returns a boolean if a field has been set.

### GetLimit

`func (o *HotelRoomMaintenanceReasonsDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *HotelRoomMaintenanceReasonsDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *HotelRoomMaintenanceReasonsDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *HotelRoomMaintenanceReasonsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelRoomMaintenanceReasonsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelRoomMaintenanceReasonsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *HotelRoomMaintenanceReasonsDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *HotelRoomMaintenanceReasonsDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *HotelRoomMaintenanceReasonsDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *HotelRoomMaintenanceReasonsDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *HotelRoomMaintenanceReasonsDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *HotelRoomMaintenanceReasonsDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *HotelRoomMaintenanceReasonsDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *HotelRoomMaintenanceReasonsDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *HotelRoomMaintenanceReasonsDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelRoomMaintenanceReasonsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelRoomMaintenanceReasonsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelRoomMaintenanceReasonsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelRoomMaintenanceReasonsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


