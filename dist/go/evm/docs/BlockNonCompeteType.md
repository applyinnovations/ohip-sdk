# BlockNonCompeteType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Industry** | Pointer to **string** | Specifies the Non-Compete Industry.&gt; | [optional] 
**IndustryDescription** | Pointer to **string** | Specifies the Non-Compete Industry description.&gt; | [optional] 
**Criteria** | Pointer to [**RateProtectionType**](RateProtectionType.md) |  | [optional] 
**ProtectedDates** | Pointer to **[]string** | Specifies a single date. | [optional] 

## Methods

### NewBlockNonCompeteType

`func NewBlockNonCompeteType() *BlockNonCompeteType`

NewBlockNonCompeteType instantiates a new BlockNonCompeteType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockNonCompeteTypeWithDefaults

`func NewBlockNonCompeteTypeWithDefaults() *BlockNonCompeteType`

NewBlockNonCompeteTypeWithDefaults instantiates a new BlockNonCompeteType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndustry

`func (o *BlockNonCompeteType) GetIndustry() string`

GetIndustry returns the Industry field if non-nil, zero value otherwise.

### GetIndustryOk

`func (o *BlockNonCompeteType) GetIndustryOk() (*string, bool)`

GetIndustryOk returns a tuple with the Industry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndustry

`func (o *BlockNonCompeteType) SetIndustry(v string)`

SetIndustry sets Industry field to given value.

### HasIndustry

`func (o *BlockNonCompeteType) HasIndustry() bool`

HasIndustry returns a boolean if a field has been set.

### GetIndustryDescription

`func (o *BlockNonCompeteType) GetIndustryDescription() string`

GetIndustryDescription returns the IndustryDescription field if non-nil, zero value otherwise.

### GetIndustryDescriptionOk

`func (o *BlockNonCompeteType) GetIndustryDescriptionOk() (*string, bool)`

GetIndustryDescriptionOk returns a tuple with the IndustryDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndustryDescription

`func (o *BlockNonCompeteType) SetIndustryDescription(v string)`

SetIndustryDescription sets IndustryDescription field to given value.

### HasIndustryDescription

`func (o *BlockNonCompeteType) HasIndustryDescription() bool`

HasIndustryDescription returns a boolean if a field has been set.

### GetCriteria

`func (o *BlockNonCompeteType) GetCriteria() RateProtectionType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *BlockNonCompeteType) GetCriteriaOk() (*RateProtectionType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *BlockNonCompeteType) SetCriteria(v RateProtectionType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *BlockNonCompeteType) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetProtectedDates

`func (o *BlockNonCompeteType) GetProtectedDates() []string`

GetProtectedDates returns the ProtectedDates field if non-nil, zero value otherwise.

### GetProtectedDatesOk

`func (o *BlockNonCompeteType) GetProtectedDatesOk() (*[]string, bool)`

GetProtectedDatesOk returns a tuple with the ProtectedDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedDates

`func (o *BlockNonCompeteType) SetProtectedDates(v []string)`

SetProtectedDates sets ProtectedDates field to given value.

### HasProtectedDates

`func (o *BlockNonCompeteType) HasProtectedDates() bool`

HasProtectedDates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


