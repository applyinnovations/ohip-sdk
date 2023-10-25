# CopyTrackItLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrackItLocations** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of Track it Locations to be copied. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyTrackItLocationsRequest

`func NewCopyTrackItLocationsRequest() *CopyTrackItLocationsRequest`

NewCopyTrackItLocationsRequest instantiates a new CopyTrackItLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTrackItLocationsRequestWithDefaults

`func NewCopyTrackItLocationsRequestWithDefaults() *CopyTrackItLocationsRequest`

NewCopyTrackItLocationsRequestWithDefaults instantiates a new CopyTrackItLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyTrackItLocationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTrackItLocationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTrackItLocationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTrackItLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItLocations

`func (o *CopyTrackItLocationsRequest) GetTrackItLocations() []CopyConfigurationCodeType`

GetTrackItLocations returns the TrackItLocations field if non-nil, zero value otherwise.

### GetTrackItLocationsOk

`func (o *CopyTrackItLocationsRequest) GetTrackItLocationsOk() (*[]CopyConfigurationCodeType, bool)`

GetTrackItLocationsOk returns a tuple with the TrackItLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItLocations

`func (o *CopyTrackItLocationsRequest) SetTrackItLocations(v []CopyConfigurationCodeType)`

SetTrackItLocations sets TrackItLocations field to given value.

### HasTrackItLocations

`func (o *CopyTrackItLocationsRequest) HasTrackItLocations() bool`

HasTrackItLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTrackItLocationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTrackItLocationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTrackItLocationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTrackItLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


