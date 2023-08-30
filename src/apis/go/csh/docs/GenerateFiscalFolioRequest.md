# GenerateFiscalFolioRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**FiscalInfoFolioCriteriaType**](FiscalInfoFolioCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGenerateFiscalFolioRequest

`func NewGenerateFiscalFolioRequest() *GenerateFiscalFolioRequest`

NewGenerateFiscalFolioRequest instantiates a new GenerateFiscalFolioRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenerateFiscalFolioRequestWithDefaults

`func NewGenerateFiscalFolioRequestWithDefaults() *GenerateFiscalFolioRequest`

NewGenerateFiscalFolioRequestWithDefaults instantiates a new GenerateFiscalFolioRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *GenerateFiscalFolioRequest) GetCriteria() FiscalInfoFolioCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *GenerateFiscalFolioRequest) GetCriteriaOk() (*FiscalInfoFolioCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *GenerateFiscalFolioRequest) SetCriteria(v FiscalInfoFolioCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *GenerateFiscalFolioRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *GenerateFiscalFolioRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GenerateFiscalFolioRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GenerateFiscalFolioRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GenerateFiscalFolioRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GenerateFiscalFolioRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GenerateFiscalFolioRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GenerateFiscalFolioRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GenerateFiscalFolioRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


