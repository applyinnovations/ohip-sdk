# YieldCategoriesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code of the Yield Category. | [optional] 
**Description** | Pointer to **string** | Description of the Yield Category. | [optional] 
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewYieldCategoriesCriteria

`func NewYieldCategoriesCriteria() *YieldCategoriesCriteria`

NewYieldCategoriesCriteria instantiates a new YieldCategoriesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldCategoriesCriteriaWithDefaults

`func NewYieldCategoriesCriteriaWithDefaults() *YieldCategoriesCriteria`

NewYieldCategoriesCriteriaWithDefaults instantiates a new YieldCategoriesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *YieldCategoriesCriteria) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *YieldCategoriesCriteria) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *YieldCategoriesCriteria) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *YieldCategoriesCriteria) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *YieldCategoriesCriteria) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *YieldCategoriesCriteria) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *YieldCategoriesCriteria) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *YieldCategoriesCriteria) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *YieldCategoriesCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *YieldCategoriesCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *YieldCategoriesCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *YieldCategoriesCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *YieldCategoriesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *YieldCategoriesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *YieldCategoriesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *YieldCategoriesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *YieldCategoriesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *YieldCategoriesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *YieldCategoriesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *YieldCategoriesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


