# VIPLevelsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VIPLevels** | Pointer to [**[]VIPLevelType**](VIPLevelType.md) | List of V I P Levels. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVIPLevelsDetails

`func NewVIPLevelsDetails() *VIPLevelsDetails`

NewVIPLevelsDetails instantiates a new VIPLevelsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVIPLevelsDetailsWithDefaults

`func NewVIPLevelsDetailsWithDefaults() *VIPLevelsDetails`

NewVIPLevelsDetailsWithDefaults instantiates a new VIPLevelsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVIPLevels

`func (o *VIPLevelsDetails) GetVIPLevels() []VIPLevelType`

GetVIPLevels returns the VIPLevels field if non-nil, zero value otherwise.

### GetVIPLevelsOk

`func (o *VIPLevelsDetails) GetVIPLevelsOk() (*[]VIPLevelType, bool)`

GetVIPLevelsOk returns a tuple with the VIPLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPLevels

`func (o *VIPLevelsDetails) SetVIPLevels(v []VIPLevelType)`

SetVIPLevels sets VIPLevels field to given value.

### HasVIPLevels

`func (o *VIPLevelsDetails) HasVIPLevels() bool`

HasVIPLevels returns a boolean if a field has been set.

### GetLinks

`func (o *VIPLevelsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VIPLevelsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VIPLevelsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VIPLevelsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VIPLevelsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VIPLevelsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VIPLevelsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VIPLevelsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


