# PasserBySale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioWindowDetails** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPasserBySale

`func NewPasserBySale() *PasserBySale`

NewPasserBySale instantiates a new PasserBySale object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasserBySaleWithDefaults

`func NewPasserBySaleWithDefaults() *PasserBySale`

NewPasserBySaleWithDefaults instantiates a new PasserBySale object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioWindowDetails

`func (o *PasserBySale) GetFolioWindowDetails() []FolioWindowType`

GetFolioWindowDetails returns the FolioWindowDetails field if non-nil, zero value otherwise.

### GetFolioWindowDetailsOk

`func (o *PasserBySale) GetFolioWindowDetailsOk() (*[]FolioWindowType, bool)`

GetFolioWindowDetailsOk returns a tuple with the FolioWindowDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowDetails

`func (o *PasserBySale) SetFolioWindowDetails(v []FolioWindowType)`

SetFolioWindowDetails sets FolioWindowDetails field to given value.

### HasFolioWindowDetails

`func (o *PasserBySale) HasFolioWindowDetails() bool`

HasFolioWindowDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PasserBySale) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PasserBySale) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PasserBySale) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PasserBySale) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PasserBySale) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PasserBySale) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PasserBySale) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PasserBySale) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


