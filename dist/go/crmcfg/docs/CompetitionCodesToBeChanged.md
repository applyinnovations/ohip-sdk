# CompetitionCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompetitionCodes** | Pointer to [**[]CompetitionCodeType**](CompetitionCodeType.md) | List of Competition Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompetitionCodesToBeChanged

`func NewCompetitionCodesToBeChanged() *CompetitionCodesToBeChanged`

NewCompetitionCodesToBeChanged instantiates a new CompetitionCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompetitionCodesToBeChangedWithDefaults

`func NewCompetitionCodesToBeChangedWithDefaults() *CompetitionCodesToBeChanged`

NewCompetitionCodesToBeChangedWithDefaults instantiates a new CompetitionCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompetitionCodes

`func (o *CompetitionCodesToBeChanged) GetCompetitionCodes() []CompetitionCodeType`

GetCompetitionCodes returns the CompetitionCodes field if non-nil, zero value otherwise.

### GetCompetitionCodesOk

`func (o *CompetitionCodesToBeChanged) GetCompetitionCodesOk() (*[]CompetitionCodeType, bool)`

GetCompetitionCodesOk returns a tuple with the CompetitionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompetitionCodes

`func (o *CompetitionCodesToBeChanged) SetCompetitionCodes(v []CompetitionCodeType)`

SetCompetitionCodes sets CompetitionCodes field to given value.

### HasCompetitionCodes

`func (o *CompetitionCodesToBeChanged) HasCompetitionCodes() bool`

HasCompetitionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CompetitionCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompetitionCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompetitionCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompetitionCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompetitionCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompetitionCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompetitionCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompetitionCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

