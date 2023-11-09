# PutTrackItItemsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TrackItItemsInfo** | Pointer to [**TrackItItemsType**](TrackItItemsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutTrackItItemsRequest

`func NewPutTrackItItemsRequest() *PutTrackItItemsRequest`

NewPutTrackItItemsRequest instantiates a new PutTrackItItemsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTrackItItemsRequestWithDefaults

`func NewPutTrackItItemsRequestWithDefaults() *PutTrackItItemsRequest`

NewPutTrackItItemsRequestWithDefaults instantiates a new PutTrackItItemsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PutTrackItItemsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutTrackItItemsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutTrackItItemsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutTrackItItemsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutTrackItItemsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTrackItItemsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTrackItItemsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTrackItItemsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItItemsInfo

`func (o *PutTrackItItemsRequest) GetTrackItItemsInfo() TrackItItemsType`

GetTrackItItemsInfo returns the TrackItItemsInfo field if non-nil, zero value otherwise.

### GetTrackItItemsInfoOk

`func (o *PutTrackItItemsRequest) GetTrackItItemsInfoOk() (*TrackItItemsType, bool)`

GetTrackItItemsInfoOk returns a tuple with the TrackItItemsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItItemsInfo

`func (o *PutTrackItItemsRequest) SetTrackItItemsInfo(v TrackItItemsType)`

SetTrackItItemsInfo sets TrackItItemsInfo field to given value.

### HasTrackItItemsInfo

`func (o *PutTrackItItemsRequest) HasTrackItItemsInfo() bool`

HasTrackItItemsInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTrackItItemsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTrackItItemsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTrackItItemsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTrackItItemsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


