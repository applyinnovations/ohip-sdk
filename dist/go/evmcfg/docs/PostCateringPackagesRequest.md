# PostCateringPackagesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringPackageList** | Pointer to [**[]CateringPackageType**](CateringPackageType.md) | Collection of multiple Catering Packages. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCateringPackagesRequest

`func NewPostCateringPackagesRequest() *PostCateringPackagesRequest`

NewPostCateringPackagesRequest instantiates a new PostCateringPackagesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCateringPackagesRequestWithDefaults

`func NewPostCateringPackagesRequestWithDefaults() *PostCateringPackagesRequest`

NewPostCateringPackagesRequestWithDefaults instantiates a new PostCateringPackagesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringPackageList

`func (o *PostCateringPackagesRequest) GetCateringPackageList() []CateringPackageType`

GetCateringPackageList returns the CateringPackageList field if non-nil, zero value otherwise.

### GetCateringPackageListOk

`func (o *PostCateringPackagesRequest) GetCateringPackageListOk() (*[]CateringPackageType, bool)`

GetCateringPackageListOk returns a tuple with the CateringPackageList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringPackageList

`func (o *PostCateringPackagesRequest) SetCateringPackageList(v []CateringPackageType)`

SetCateringPackageList sets CateringPackageList field to given value.

### HasCateringPackageList

`func (o *PostCateringPackagesRequest) HasCateringPackageList() bool`

HasCateringPackageList returns a boolean if a field has been set.

### GetLinks

`func (o *PostCateringPackagesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCateringPackagesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCateringPackagesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCateringPackagesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCateringPackagesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCateringPackagesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCateringPackagesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCateringPackagesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


