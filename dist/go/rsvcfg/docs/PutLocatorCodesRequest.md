# PutLocatorCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**LocatorCodes** | Pointer to [**[]LocatorCodeType**](LocatorCodeType.md) | Collection of locator codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutLocatorCodesRequest

`func NewPutLocatorCodesRequest() *PutLocatorCodesRequest`

NewPutLocatorCodesRequest instantiates a new PutLocatorCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutLocatorCodesRequestWithDefaults

`func NewPutLocatorCodesRequestWithDefaults() *PutLocatorCodesRequest`

NewPutLocatorCodesRequestWithDefaults instantiates a new PutLocatorCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutLocatorCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutLocatorCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutLocatorCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutLocatorCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocatorCodes

`func (o *PutLocatorCodesRequest) GetLocatorCodes() []LocatorCodeType`

GetLocatorCodes returns the LocatorCodes field if non-nil, zero value otherwise.

### GetLocatorCodesOk

`func (o *PutLocatorCodesRequest) GetLocatorCodesOk() (*[]LocatorCodeType, bool)`

GetLocatorCodesOk returns a tuple with the LocatorCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorCodes

`func (o *PutLocatorCodesRequest) SetLocatorCodes(v []LocatorCodeType)`

SetLocatorCodes sets LocatorCodes field to given value.

### HasLocatorCodes

`func (o *PutLocatorCodesRequest) HasLocatorCodes() bool`

HasLocatorCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutLocatorCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutLocatorCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutLocatorCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutLocatorCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


