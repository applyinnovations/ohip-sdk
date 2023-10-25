# ChangeTrackItTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrackItTypes** | Pointer to [**[]TrackItTypeConfigType**](TrackItTypeConfigType.md) | Track It Type Collection element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTrackItTypesRequest

`func NewChangeTrackItTypesRequest() *ChangeTrackItTypesRequest`

NewChangeTrackItTypesRequest instantiates a new ChangeTrackItTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTrackItTypesRequestWithDefaults

`func NewChangeTrackItTypesRequestWithDefaults() *ChangeTrackItTypesRequest`

NewChangeTrackItTypesRequestWithDefaults instantiates a new ChangeTrackItTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTrackItTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTrackItTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTrackItTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTrackItTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItTypes

`func (o *ChangeTrackItTypesRequest) GetTrackItTypes() []TrackItTypeConfigType`

GetTrackItTypes returns the TrackItTypes field if non-nil, zero value otherwise.

### GetTrackItTypesOk

`func (o *ChangeTrackItTypesRequest) GetTrackItTypesOk() (*[]TrackItTypeConfigType, bool)`

GetTrackItTypesOk returns a tuple with the TrackItTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItTypes

`func (o *ChangeTrackItTypesRequest) SetTrackItTypes(v []TrackItTypeConfigType)`

SetTrackItTypes sets TrackItTypes field to given value.

### HasTrackItTypes

`func (o *ChangeTrackItTypesRequest) HasTrackItTypes() bool`

HasTrackItTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTrackItTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTrackItTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTrackItTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTrackItTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


