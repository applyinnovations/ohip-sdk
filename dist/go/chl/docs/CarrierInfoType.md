# CarrierInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CarrierCode** | Pointer to **string** | Use the SGA(Signature Airline Code) to filter rate codes for specific sources of business. This field can also be used to exclude specific sources of availability and bookings from the selection of rates. | [optional] 
**ReturnToSGA** | Pointer to **bool** | Return to SGA. | [optional] 

## Methods

### NewCarrierInfoType

`func NewCarrierInfoType() *CarrierInfoType`

NewCarrierInfoType instantiates a new CarrierInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCarrierInfoTypeWithDefaults

`func NewCarrierInfoTypeWithDefaults() *CarrierInfoType`

NewCarrierInfoTypeWithDefaults instantiates a new CarrierInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCarrierCode

`func (o *CarrierInfoType) GetCarrierCode() string`

GetCarrierCode returns the CarrierCode field if non-nil, zero value otherwise.

### GetCarrierCodeOk

`func (o *CarrierInfoType) GetCarrierCodeOk() (*string, bool)`

GetCarrierCodeOk returns a tuple with the CarrierCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrierCode

`func (o *CarrierInfoType) SetCarrierCode(v string)`

SetCarrierCode sets CarrierCode field to given value.

### HasCarrierCode

`func (o *CarrierInfoType) HasCarrierCode() bool`

HasCarrierCode returns a boolean if a field has been set.

### GetReturnToSGA

`func (o *CarrierInfoType) GetReturnToSGA() bool`

GetReturnToSGA returns the ReturnToSGA field if non-nil, zero value otherwise.

### GetReturnToSGAOk

`func (o *CarrierInfoType) GetReturnToSGAOk() (*bool, bool)`

GetReturnToSGAOk returns a tuple with the ReturnToSGA field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnToSGA

`func (o *CarrierInfoType) SetReturnToSGA(v bool)`

SetReturnToSGA sets ReturnToSGA field to given value.

### HasReturnToSGA

`func (o *CarrierInfoType) HasReturnToSGA() bool`

HasReturnToSGA returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


