# PostVIPLevelsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**VIPLevels** | Pointer to [**[]VIPLevelType**](VIPLevelType.md) | List of V I P Levels. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostVIPLevelsRequest

`func NewPostVIPLevelsRequest() *PostVIPLevelsRequest`

NewPostVIPLevelsRequest instantiates a new PostVIPLevelsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostVIPLevelsRequestWithDefaults

`func NewPostVIPLevelsRequestWithDefaults() *PostVIPLevelsRequest`

NewPostVIPLevelsRequestWithDefaults instantiates a new PostVIPLevelsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostVIPLevelsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostVIPLevelsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostVIPLevelsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostVIPLevelsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetVIPLevels

`func (o *PostVIPLevelsRequest) GetVIPLevels() []VIPLevelType`

GetVIPLevels returns the VIPLevels field if non-nil, zero value otherwise.

### GetVIPLevelsOk

`func (o *PostVIPLevelsRequest) GetVIPLevelsOk() (*[]VIPLevelType, bool)`

GetVIPLevelsOk returns a tuple with the VIPLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPLevels

`func (o *PostVIPLevelsRequest) SetVIPLevels(v []VIPLevelType)`

SetVIPLevels sets VIPLevels field to given value.

### HasVIPLevels

`func (o *PostVIPLevelsRequest) HasVIPLevels() bool`

HasVIPLevels returns a boolean if a field has been set.

### GetWarnings

`func (o *PostVIPLevelsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostVIPLevelsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostVIPLevelsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostVIPLevelsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


