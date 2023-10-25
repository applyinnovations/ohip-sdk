# ChangeHotelRateRangesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRateRanges** | Pointer to [**[]HotelRateRangeType**](HotelRateRangeType.md) | Lists of rate ranges of the hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeHotelRateRangesRequest

`func NewChangeHotelRateRangesRequest() *ChangeHotelRateRangesRequest`

NewChangeHotelRateRangesRequest instantiates a new ChangeHotelRateRangesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeHotelRateRangesRequestWithDefaults

`func NewChangeHotelRateRangesRequestWithDefaults() *ChangeHotelRateRangesRequest`

NewChangeHotelRateRangesRequestWithDefaults instantiates a new ChangeHotelRateRangesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRateRanges

`func (o *ChangeHotelRateRangesRequest) GetHotelRateRanges() []HotelRateRangeType`

GetHotelRateRanges returns the HotelRateRanges field if non-nil, zero value otherwise.

### GetHotelRateRangesOk

`func (o *ChangeHotelRateRangesRequest) GetHotelRateRangesOk() (*[]HotelRateRangeType, bool)`

GetHotelRateRangesOk returns a tuple with the HotelRateRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateRanges

`func (o *ChangeHotelRateRangesRequest) SetHotelRateRanges(v []HotelRateRangeType)`

SetHotelRateRanges sets HotelRateRanges field to given value.

### HasHotelRateRanges

`func (o *ChangeHotelRateRangesRequest) HasHotelRateRanges() bool`

HasHotelRateRanges returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeHotelRateRangesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeHotelRateRangesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeHotelRateRangesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeHotelRateRangesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeHotelRateRangesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeHotelRateRangesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeHotelRateRangesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeHotelRateRangesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


