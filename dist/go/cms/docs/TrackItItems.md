# TrackItItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackItItemsInfo** | Pointer to [**[]TrackItItemType**](TrackItItemType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTrackItItems

`func NewTrackItItems() *TrackItItems`

NewTrackItItems instantiates a new TrackItItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItItemsWithDefaults

`func NewTrackItItemsWithDefaults() *TrackItItems`

NewTrackItItemsWithDefaults instantiates a new TrackItItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTrackItItemsInfo

`func (o *TrackItItems) GetTrackItItemsInfo() []TrackItItemType`

GetTrackItItemsInfo returns the TrackItItemsInfo field if non-nil, zero value otherwise.

### GetTrackItItemsInfoOk

`func (o *TrackItItems) GetTrackItItemsInfoOk() (*[]TrackItItemType, bool)`

GetTrackItItemsInfoOk returns a tuple with the TrackItItemsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItItemsInfo

`func (o *TrackItItems) SetTrackItItemsInfo(v []TrackItItemType)`

SetTrackItItemsInfo sets TrackItItemsInfo field to given value.

### HasTrackItItemsInfo

`func (o *TrackItItems) HasTrackItItemsInfo() bool`

HasTrackItItemsInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *TrackItItems) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrackItItems) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrackItItems) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrackItItems) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *TrackItItems) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TrackItItems) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TrackItItems) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TrackItItems) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TrackItItems) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TrackItItems) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TrackItItems) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TrackItItems) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


