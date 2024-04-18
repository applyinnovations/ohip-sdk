# InfluenceCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InfluenceCodes** | Pointer to [**[]InfluenceCodeType**](InfluenceCodeType.md) | List of Influence Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInfluenceCodesDetails

`func NewInfluenceCodesDetails() *InfluenceCodesDetails`

NewInfluenceCodesDetails instantiates a new InfluenceCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfluenceCodesDetailsWithDefaults

`func NewInfluenceCodesDetailsWithDefaults() *InfluenceCodesDetails`

NewInfluenceCodesDetailsWithDefaults instantiates a new InfluenceCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInfluenceCodes

`func (o *InfluenceCodesDetails) GetInfluenceCodes() []InfluenceCodeType`

GetInfluenceCodes returns the InfluenceCodes field if non-nil, zero value otherwise.

### GetInfluenceCodesOk

`func (o *InfluenceCodesDetails) GetInfluenceCodesOk() (*[]InfluenceCodeType, bool)`

GetInfluenceCodesOk returns a tuple with the InfluenceCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfluenceCodes

`func (o *InfluenceCodesDetails) SetInfluenceCodes(v []InfluenceCodeType)`

SetInfluenceCodes sets InfluenceCodes field to given value.

### HasInfluenceCodes

`func (o *InfluenceCodesDetails) HasInfluenceCodes() bool`

HasInfluenceCodes returns a boolean if a field has been set.

### GetLinks

`func (o *InfluenceCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InfluenceCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InfluenceCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InfluenceCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InfluenceCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InfluenceCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InfluenceCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InfluenceCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


