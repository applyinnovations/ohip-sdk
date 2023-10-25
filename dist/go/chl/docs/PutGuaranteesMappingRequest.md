# PutGuaranteesMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Guarantees** | Pointer to [**[]GuaranteeMappingType**](GuaranteeMappingType.md) | Information about an external system guarantee mapping. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutGuaranteesMappingRequest

`func NewPutGuaranteesMappingRequest() *PutGuaranteesMappingRequest`

NewPutGuaranteesMappingRequest instantiates a new PutGuaranteesMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutGuaranteesMappingRequestWithDefaults

`func NewPutGuaranteesMappingRequestWithDefaults() *PutGuaranteesMappingRequest`

NewPutGuaranteesMappingRequestWithDefaults instantiates a new PutGuaranteesMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuarantees

`func (o *PutGuaranteesMappingRequest) GetGuarantees() []GuaranteeMappingType`

GetGuarantees returns the Guarantees field if non-nil, zero value otherwise.

### GetGuaranteesOk

`func (o *PutGuaranteesMappingRequest) GetGuaranteesOk() (*[]GuaranteeMappingType, bool)`

GetGuaranteesOk returns a tuple with the Guarantees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantees

`func (o *PutGuaranteesMappingRequest) SetGuarantees(v []GuaranteeMappingType)`

SetGuarantees sets Guarantees field to given value.

### HasGuarantees

`func (o *PutGuaranteesMappingRequest) HasGuarantees() bool`

HasGuarantees returns a boolean if a field has been set.

### GetLinks

`func (o *PutGuaranteesMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutGuaranteesMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutGuaranteesMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutGuaranteesMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutGuaranteesMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutGuaranteesMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutGuaranteesMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutGuaranteesMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


