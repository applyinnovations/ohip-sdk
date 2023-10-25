# PostTemplateRoomFeaturesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateRoomFeatures** | Pointer to [**[]TemplateRoomFeatureConfigType**](TemplateRoomFeatureConfigType.md) | Template room feature details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateRoomFeaturesRequest

`func NewPostTemplateRoomFeaturesRequest() *PostTemplateRoomFeaturesRequest`

NewPostTemplateRoomFeaturesRequest instantiates a new PostTemplateRoomFeaturesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateRoomFeaturesRequestWithDefaults

`func NewPostTemplateRoomFeaturesRequestWithDefaults() *PostTemplateRoomFeaturesRequest`

NewPostTemplateRoomFeaturesRequestWithDefaults instantiates a new PostTemplateRoomFeaturesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateRoomFeaturesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateRoomFeaturesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateRoomFeaturesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateRoomFeaturesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRoomFeatures

`func (o *PostTemplateRoomFeaturesRequest) GetTemplateRoomFeatures() []TemplateRoomFeatureConfigType`

GetTemplateRoomFeatures returns the TemplateRoomFeatures field if non-nil, zero value otherwise.

### GetTemplateRoomFeaturesOk

`func (o *PostTemplateRoomFeaturesRequest) GetTemplateRoomFeaturesOk() (*[]TemplateRoomFeatureConfigType, bool)`

GetTemplateRoomFeaturesOk returns a tuple with the TemplateRoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRoomFeatures

`func (o *PostTemplateRoomFeaturesRequest) SetTemplateRoomFeatures(v []TemplateRoomFeatureConfigType)`

SetTemplateRoomFeatures sets TemplateRoomFeatures field to given value.

### HasTemplateRoomFeatures

`func (o *PostTemplateRoomFeaturesRequest) HasTemplateRoomFeatures() bool`

HasTemplateRoomFeatures returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateRoomFeaturesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateRoomFeaturesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateRoomFeaturesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateRoomFeaturesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


