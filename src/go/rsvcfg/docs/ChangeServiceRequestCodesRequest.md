# ChangeServiceRequestCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ServiceRequestCodes** | Pointer to [**ServiceRequestCodesType**](ServiceRequestCodesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeServiceRequestCodesRequest

`func NewChangeServiceRequestCodesRequest() *ChangeServiceRequestCodesRequest`

NewChangeServiceRequestCodesRequest instantiates a new ChangeServiceRequestCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeServiceRequestCodesRequestWithDefaults

`func NewChangeServiceRequestCodesRequestWithDefaults() *ChangeServiceRequestCodesRequest`

NewChangeServiceRequestCodesRequestWithDefaults instantiates a new ChangeServiceRequestCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeServiceRequestCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeServiceRequestCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeServiceRequestCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeServiceRequestCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServiceRequestCodes

`func (o *ChangeServiceRequestCodesRequest) GetServiceRequestCodes() ServiceRequestCodesType`

GetServiceRequestCodes returns the ServiceRequestCodes field if non-nil, zero value otherwise.

### GetServiceRequestCodesOk

`func (o *ChangeServiceRequestCodesRequest) GetServiceRequestCodesOk() (*ServiceRequestCodesType, bool)`

GetServiceRequestCodesOk returns a tuple with the ServiceRequestCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodes

`func (o *ChangeServiceRequestCodesRequest) SetServiceRequestCodes(v ServiceRequestCodesType)`

SetServiceRequestCodes sets ServiceRequestCodes field to given value.

### HasServiceRequestCodes

`func (o *ChangeServiceRequestCodesRequest) HasServiceRequestCodes() bool`

HasServiceRequestCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeServiceRequestCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeServiceRequestCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeServiceRequestCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeServiceRequestCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


