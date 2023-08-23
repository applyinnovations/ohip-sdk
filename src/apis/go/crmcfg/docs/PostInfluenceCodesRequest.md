# PostInfluenceCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InfluenceCodes** | Pointer to [**[]InfluenceCodeType**](InfluenceCodeType.md) | List of Influence Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostInfluenceCodesRequest

`func NewPostInfluenceCodesRequest() *PostInfluenceCodesRequest`

NewPostInfluenceCodesRequest instantiates a new PostInfluenceCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostInfluenceCodesRequestWithDefaults

`func NewPostInfluenceCodesRequestWithDefaults() *PostInfluenceCodesRequest`

NewPostInfluenceCodesRequestWithDefaults instantiates a new PostInfluenceCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInfluenceCodes

`func (o *PostInfluenceCodesRequest) GetInfluenceCodes() []InfluenceCodeType`

GetInfluenceCodes returns the InfluenceCodes field if non-nil, zero value otherwise.

### GetInfluenceCodesOk

`func (o *PostInfluenceCodesRequest) GetInfluenceCodesOk() (*[]InfluenceCodeType, bool)`

GetInfluenceCodesOk returns a tuple with the InfluenceCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfluenceCodes

`func (o *PostInfluenceCodesRequest) SetInfluenceCodes(v []InfluenceCodeType)`

SetInfluenceCodes sets InfluenceCodes field to given value.

### HasInfluenceCodes

`func (o *PostInfluenceCodesRequest) HasInfluenceCodes() bool`

HasInfluenceCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostInfluenceCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostInfluenceCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostInfluenceCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostInfluenceCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostInfluenceCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostInfluenceCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostInfluenceCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostInfluenceCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


