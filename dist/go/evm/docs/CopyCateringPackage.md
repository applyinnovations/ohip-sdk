# CopyCateringPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CopyCateringPkgType**](CopyCateringPkgType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewCopyCateringPackage

`func NewCopyCateringPackage() *CopyCateringPackage`

NewCopyCateringPackage instantiates a new CopyCateringPackage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringPackageWithDefaults

`func NewCopyCateringPackageWithDefaults() *CopyCateringPackage`

NewCopyCateringPackageWithDefaults instantiates a new CopyCateringPackage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *CopyCateringPackage) GetCriteria() CopyCateringPkgType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *CopyCateringPackage) GetCriteriaOk() (*CopyCateringPkgType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *CopyCateringPackage) SetCriteria(v CopyCateringPkgType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *CopyCateringPackage) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyCateringPackage) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyCateringPackage) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyCateringPackage) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyCateringPackage) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


