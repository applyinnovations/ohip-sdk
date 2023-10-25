# PutHotelPackageForecastGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelPackageForecastGroups** | Pointer to [**[]HotelPackageForecastGroupType**](HotelPackageForecastGroupType.md) | Hotel package forecast group details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutHotelPackageForecastGroupsRequest

`func NewPutHotelPackageForecastGroupsRequest() *PutHotelPackageForecastGroupsRequest`

NewPutHotelPackageForecastGroupsRequest instantiates a new PutHotelPackageForecastGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutHotelPackageForecastGroupsRequestWithDefaults

`func NewPutHotelPackageForecastGroupsRequestWithDefaults() *PutHotelPackageForecastGroupsRequest`

NewPutHotelPackageForecastGroupsRequestWithDefaults instantiates a new PutHotelPackageForecastGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelPackageForecastGroups

`func (o *PutHotelPackageForecastGroupsRequest) GetHotelPackageForecastGroups() []HotelPackageForecastGroupType`

GetHotelPackageForecastGroups returns the HotelPackageForecastGroups field if non-nil, zero value otherwise.

### GetHotelPackageForecastGroupsOk

`func (o *PutHotelPackageForecastGroupsRequest) GetHotelPackageForecastGroupsOk() (*[]HotelPackageForecastGroupType, bool)`

GetHotelPackageForecastGroupsOk returns a tuple with the HotelPackageForecastGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelPackageForecastGroups

`func (o *PutHotelPackageForecastGroupsRequest) SetHotelPackageForecastGroups(v []HotelPackageForecastGroupType)`

SetHotelPackageForecastGroups sets HotelPackageForecastGroups field to given value.

### HasHotelPackageForecastGroups

`func (o *PutHotelPackageForecastGroupsRequest) HasHotelPackageForecastGroups() bool`

HasHotelPackageForecastGroups returns a boolean if a field has been set.

### GetLinks

`func (o *PutHotelPackageForecastGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutHotelPackageForecastGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutHotelPackageForecastGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutHotelPackageForecastGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutHotelPackageForecastGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutHotelPackageForecastGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutHotelPackageForecastGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutHotelPackageForecastGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


