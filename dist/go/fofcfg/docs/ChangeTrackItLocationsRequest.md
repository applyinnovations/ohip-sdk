# ChangeTrackItLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrackItLocations** | Pointer to [**[]TrackItLocationConfigType**](TrackItLocationConfigType.md) | Track It Locations Collection element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTrackItLocationsRequest

`func NewChangeTrackItLocationsRequest() *ChangeTrackItLocationsRequest`

NewChangeTrackItLocationsRequest instantiates a new ChangeTrackItLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTrackItLocationsRequestWithDefaults

`func NewChangeTrackItLocationsRequestWithDefaults() *ChangeTrackItLocationsRequest`

NewChangeTrackItLocationsRequestWithDefaults instantiates a new ChangeTrackItLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTrackItLocationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTrackItLocationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTrackItLocationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTrackItLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItLocations

`func (o *ChangeTrackItLocationsRequest) GetTrackItLocations() []TrackItLocationConfigType`

GetTrackItLocations returns the TrackItLocations field if non-nil, zero value otherwise.

### GetTrackItLocationsOk

`func (o *ChangeTrackItLocationsRequest) GetTrackItLocationsOk() (*[]TrackItLocationConfigType, bool)`

GetTrackItLocationsOk returns a tuple with the TrackItLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItLocations

`func (o *ChangeTrackItLocationsRequest) SetTrackItLocations(v []TrackItLocationConfigType)`

SetTrackItLocations sets TrackItLocations field to given value.

### HasTrackItLocations

`func (o *ChangeTrackItLocationsRequest) HasTrackItLocations() bool`

HasTrackItLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTrackItLocationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTrackItLocationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTrackItLocationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTrackItLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


