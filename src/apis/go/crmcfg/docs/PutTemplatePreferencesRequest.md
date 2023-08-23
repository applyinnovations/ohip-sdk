# PutTemplatePreferencesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplatePreferences** | Pointer to [**[]ConfigTemplatePreferenceType**](ConfigTemplatePreferenceType.md) | This type holds a collection of preferences at the template level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTemplatePreferencesRequest

`func NewPutTemplatePreferencesRequest() *PutTemplatePreferencesRequest`

NewPutTemplatePreferencesRequest instantiates a new PutTemplatePreferencesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTemplatePreferencesRequestWithDefaults

`func NewPutTemplatePreferencesRequestWithDefaults() *PutTemplatePreferencesRequest`

NewPutTemplatePreferencesRequestWithDefaults instantiates a new PutTemplatePreferencesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplatePreferences

`func (o *PutTemplatePreferencesRequest) GetTemplatePreferences() []ConfigTemplatePreferenceType`

GetTemplatePreferences returns the TemplatePreferences field if non-nil, zero value otherwise.

### GetTemplatePreferencesOk

`func (o *PutTemplatePreferencesRequest) GetTemplatePreferencesOk() (*[]ConfigTemplatePreferenceType, bool)`

GetTemplatePreferencesOk returns a tuple with the TemplatePreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplatePreferences

`func (o *PutTemplatePreferencesRequest) SetTemplatePreferences(v []ConfigTemplatePreferenceType)`

SetTemplatePreferences sets TemplatePreferences field to given value.

### HasTemplatePreferences

`func (o *PutTemplatePreferencesRequest) HasTemplatePreferences() bool`

HasTemplatePreferences returns a boolean if a field has been set.

### GetLinks

`func (o *PutTemplatePreferencesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTemplatePreferencesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTemplatePreferencesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTemplatePreferencesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTemplatePreferencesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTemplatePreferencesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTemplatePreferencesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTemplatePreferencesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


