# PostRegionsCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RegionsCode** | Pointer to [**[]RegionCodeType**](RegionCodeType.md) | List of Regions Code. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRegionsCodeRequest

`func NewPostRegionsCodeRequest() *PostRegionsCodeRequest`

NewPostRegionsCodeRequest instantiates a new PostRegionsCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRegionsCodeRequestWithDefaults

`func NewPostRegionsCodeRequestWithDefaults() *PostRegionsCodeRequest`

NewPostRegionsCodeRequestWithDefaults instantiates a new PostRegionsCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRegionsCodeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRegionsCodeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRegionsCodeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRegionsCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRegionsCode

`func (o *PostRegionsCodeRequest) GetRegionsCode() []RegionCodeType`

GetRegionsCode returns the RegionsCode field if non-nil, zero value otherwise.

### GetRegionsCodeOk

`func (o *PostRegionsCodeRequest) GetRegionsCodeOk() (*[]RegionCodeType, bool)`

GetRegionsCodeOk returns a tuple with the RegionsCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionsCode

`func (o *PostRegionsCodeRequest) SetRegionsCode(v []RegionCodeType)`

SetRegionsCode sets RegionsCode field to given value.

### HasRegionsCode

`func (o *PostRegionsCodeRequest) HasRegionsCode() bool`

HasRegionsCode returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRegionsCodeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRegionsCodeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRegionsCodeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRegionsCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


